import React, { useEffect, useState } from "react";
import axios from "axios";

export default function CloserOrdersToConfirm() {
  const [orders, setOrders] = useState([]);
  const [loading, setLoading] = useState(true);
  const [emailSentOrderId, setEmailSentOrderId] = useState(null);

  useEffect(() => {
    fetchOrders();
  }, []);

  const fetchOrders = async () => {
    try {
      setLoading(true);
      const token = localStorage.getItem("token");
      const res = await axios.get("/api/orders/to-confirm", {
        headers: { Authorization: `Bearer ${token}` },
      });
      setOrders(res.data);
    } catch (err) {
      console.error("Erreur chargement commandes à confirmer :", err);
      alert("Erreur lors du chargement des commandes.");
    } finally {
      setLoading(false);
    }
  };

  const handleConfirm = async (orderId) => {
    if (!window.confirm("Confirmer cette commande ?")) return;

    try {
      const token = localStorage.getItem("token");

      // Confirmer la commande
      await axios.patch(`/api/orders/confirm/${orderId}`, {}, {
        headers: { Authorization: `Bearer ${token}` },
      });

      // Récupérer la commande confirmée
      const { data: confirmedOrder } = await axios.get(`/api/orders/${orderId}`, {
        headers: { Authorization: `Bearer ${token}` },
      });

      if (!confirmedOrder.products || confirmedOrder.products.length === 0) {
        throw new Error("Aucun produit dans la commande.");
      }

      // Construire le contenu de l'e-mail
      const emailPayload = {
        to: confirmedOrder.client.email,
        subject: "Confirmation de votre commande",
        client: { name: confirmedOrder.client.name },
        total: confirmedOrder.total,
        cart: confirmedOrder.products.map((p) => ({
          name: p.product.name,
          quantity: p.quantity,
          price: p.price,
        })),
      };

      // Envoyer l'e-mail
      await axios.post(`/api/orders/${orderId}/send-email`, emailPayload, {
        headers: { Authorization: `Bearer ${token}` },
      });

      setEmailSentOrderId(orderId);
      setTimeout(() => setEmailSentOrderId(null), 3000);

      alert("Commande confirmée et e-mail envoyé.");
      fetchOrders();
    } catch (err) {
      console.error("Erreur confirmation ou envoi e-mail :", err);
      alert("Erreur lors de la confirmation ou de l'envoi de l'e-mail.");
    }
  };

  const handleReject = async (orderId) => {
    if (!window.confirm("Rejeter cette commande ?")) return;

    try {
      const token = localStorage.getItem("token");
      await axios.delete(`/api/orders/delete/${orderId}`, {
        headers: { Authorization: `Bearer ${token}` },
      });
      alert("Commande rejetée !");
      fetchOrders();
    } catch (err) {
      console.error("Erreur rejet commande :", err);
      alert("Erreur lors du rejet de la commande.");
    }
  };

  if (loading) {
    return (
      <div className="flex justify-center items-center h-48">
        <p className="text-gray-600">Chargement des commandes...</p>
      </div>
    );
  }

  return (
    <div className="max-w-7xl mx-auto p-6 bg-white rounded shadow">
      <h2 className="text-2xl font-semibold mb-6 text-purple-700">
        📋 Commandes à confirmer - Closer
      </h2>

      {orders.length === 0 ? (
        <p className="text-gray-500">Aucune commande en attente pour le moment.</p>
      ) : (
        <div className="overflow-x-auto">
          <table className="min-w-full border border-gray-200">
            <thead className="bg-purple-50 text-left">
              <tr>
                <th className="border p-3 text-sm font-medium text-purple-600">Client</th>
                <th className="border p-3 text-sm font-medium text-purple-600">Total</th>
                <th className="border p-3 text-sm font-medium text-purple-600">Date</th>
                <th className="border p-3 text-sm font-medium text-purple-600">Actions</th>
              </tr>
            </thead>
            <tbody>
              {orders.map((order) => (
                <tr key={order._id} className="hover:bg-purple-50">
                  <td className="border p-3">{order.client?.name || "Inconnu"}</td>
                  <td className="border p-3">{order.total.toLocaleString()} FCFA</td>
                  <td className="border p-3">
                    {new Date(order.createdAt).toLocaleDateString()}
                  </td>
                  <td className="border p-3 space-x-2">
                    <button
                      onClick={() => handleConfirm(order._id)}
                      className="bg-green-600 text-white px-4 py-1 rounded hover:bg-green-700 transition"
                    >
                      Confirmer
                    </button>
                    <button
                      onClick={() => handleReject(order._id)}
                      className="bg-red-500 text-white px-4 py-1 rounded hover:bg-red-600 transition"
                    >
                      Rejeter
                    </button>
                    {emailSentOrderId === order._id && (
                      <span className="ml-2 bg-blue-100 text-blue-800 px-2 py-1 text-xs rounded">
                        📧 Mail envoyé
                      </span>
                    )}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
}

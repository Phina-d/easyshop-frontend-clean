// src/pages/client/ClientOrders.jsx
import React from "react";

export default function ClientOrders() {
  // Exemple de données statiques, à remplacer par API réelle
  const orders = [
    { id: "123", date: "2025-07-20", total: 49.99, status: "En cours" },
    { id: "124", date: "2025-07-18", total: 89.5, status: "Livré" },
    { id: "125", date: "2025-07-15", total: 120.0, status: "Annulé" },
  ];

  return (
    <div className="max-w-4xl mx-auto bg-white p-6 rounded shadow">
      <h2 className="text-2xl font-bold mb-4">Mes commandes</h2>
      {orders.length === 0 ? (
        <p>Vous n'avez aucune commande pour le moment.</p>
      ) : (
        <table className="w-full table-auto border-collapse">
          <thead>
            <tr className="bg-pink-600 text-white">
              <th className="p-2 border">Numéro</th>
              <th className="p-2 border">Date</th>
              <th className="p-2 border">Total (€)</th>
              <th className="p-2 border">Statut</th>
            </tr>
          </thead>
          <tbody>
            {orders.map(({ id, date, total, status }) => (
              <tr key={id} className="text-center hover:bg-gray-100">
                <td className="p-2 border">{id}</td>
                <td className="p-2 border">{date}</td>
                <td className="p-2 border">{total.toFixed(2)}</td>
                <td className="p-2 border">{status}</td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
}

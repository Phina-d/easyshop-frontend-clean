import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom"; // ✅ ajout de useNavigate
import "./AdminDashboard.css";
import AdminStats from "../../components/admin/AdminStats";
import UserList from "../admin/UsersListAdmin";

export default function AdminDashboard() {
  const navigate = useNavigate(); // ✅ définition de navigate

  const [stats, setStats] = useState({
    totalUsers: 0,
    ordersToConfirm: 0,
    confirmedOrders: 0,
    totalRevenue: 0,
  });

  const [clients, setClients] = useState([]);
  const [loadingClients, setLoadingClients] = useState(true);
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    const fetchStats = async () => {
      try {
        const res = await axios.get("http://localhost:5000/api/admin/stats", {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("token")}`,
          },
        });
        setStats(res.data);
      } catch (err) {
        console.error(err);
      }
    };

    const fetchClients = async () => {
      try {
        const res = await axios.get("http://localhost:5000/api/users/clients", {
          headers: { Authorization: `Bearer ${localStorage.getItem("token")}` },
        });
        setClients(res.data);
      } catch (err) {
        console.error("Erreur chargement clients:", err);
      } finally {
        setLoadingClients(false);
      }
    };

    fetchStats();
    fetchClients();
  }, []);

  const handleDeleteClient = async (id) => {
    const confirm = window.confirm("Confirmer la suppression de ce client ?");
    if (!confirm) return;

    try {
      await axios.delete(`http://localhost:5000/api/users/${id}`, {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
      });
      setClients((prev) => prev.filter((client) => client._id !== id));
    } catch (err) {
      console.error("Erreur suppression client :", err);
      alert("Une erreur est survenue.");
    }
  };

  const filteredClients = clients.filter((client) => {
    const search = searchTerm.toLowerCase();
    return (
      client.name?.toLowerCase().includes(search) ||
      client.email?.toLowerCase().includes(search) ||
      client.phoneNumber?.toLowerCase().includes(search)
    );
  });

  return (
    <div className="admin-dashboard">
      <h2>Tableau de bord - Admin</h2>

      <div className="stats-container">
        <div className="stat-card">👥 Utilisateurs : {stats.totalUsers}</div>
        <div className="stat-card">⌛ Commandes à confirmer : {stats.ordersToConfirm}</div>
        <div className="stat-card">✅ Commandes confirmées : {stats.confirmedOrders}</div>
        <div className="stat-card">
          💰 Revenus : {stats.totalRevenue.toLocaleString()} FCFA
        </div>
      </div>

      <Link to="/admin/users" className="text-blue-600 underline">
        Gérer les utilisateurs
      </Link>

      <AdminStats />
      <UserList />

      {/* Liste des clients */}
      <div className="clients-section mt-10 max-w-7xl mx-auto p-4 bg-white rounded shadow">
        <div className="flex justify-between items-center mb-4">
          <h3 className="text-2xl font-semibold">Liste des clients</h3>
          <Link
            to="/admin/utilisateurs/ajouter"
            className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
          >
            ➕ Ajouter un client
          </Link>
        </div>

        <input
          type="text"
          placeholder="🔍 Rechercher clients par nom, email ou téléphone..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="border px-4 py-2 rounded w-full max-w-md mb-6"
        />

        {loadingClients ? (
          <p>Chargement des clients...</p>
        ) : filteredClients.length === 0 ? (
          <p>Aucun client trouvé.</p>
        ) : (
          <table className="min-w-full border-collapse border border-gray-300">
            <thead>
              <tr className="bg-gray-100">
                <th className="border border-gray-300 px-4 py-2 text-left">Nom</th>
                <th className="border border-gray-300 px-4 py-2 text-left">Email</th>
                <th className="border border-gray-300 px-4 py-2 text-left">Téléphone</th>
                <th className="border border-gray-300 px-4 py-2 text-left">Actions</th>
              </tr>
            </thead>
            <tbody>
              {filteredClients.map((client) => (
                <tr key={client._id} className="hover:bg-gray-50">
                  <td className="border border-gray-300 px-4 py-2">{client.name}</td>
                  <td className="border border-gray-300 px-4 py-2">{client.email}</td>
                  <td className="border border-gray-300 px-4 py-2">{client.phoneNumber || "-"}</td>
                  <td className="border border-gray-300 px-4 py-2 space-x-2">
                    <button
                      onClick={() => navigate(`/admin/edit-user/${client._id}`)} // ✅ correction ici
                      className="bg-blue-500 text-white px-3 py-1 rounded hover:bg-blue-600"
                    >
                      ✏️ Modifier
                    </button>
                    <button
                      onClick={() => handleDeleteClient(client._id)}
                      className="bg-red-500 hover:bg-red-600 text-white px-3 py-1 rounded"
                    >
                      🗑️ Supprimer
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        )}
      </div>
    </div>
  );
}

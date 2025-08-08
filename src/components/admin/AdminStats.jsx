import React, { useEffect, useState } from "react";
import axios from "axios";

function AdminStats() {
  const [stats, setStats] = useState({
    totalUsers: 0,
    ordersToConfirm: 0,
    confirmedOrders: 0,
    totalRevenue: 0,
  });
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const token = localStorage.getItem("token");

    async function fetchStats() {
      try {
        const res = await axios.get("http://localhost:5000/api/admin/stats", {
          headers: { Authorization: `Bearer ${token}` },
        });
        setStats(res.data);
      } catch (err) {
        console.error(err);
        setError("Erreur lors du chargement des statistiques");
      } finally {
        setLoading(false);
      }
    }
    fetchStats();
  }, []);

  if (loading) return <p>Chargement des statistiques...</p>;
  if (error) return <p className="text-red-600">{error}</p>;

  return (
    <div className="admin-stats p-4 bg-gray-100 rounded-md shadow-md mb-6">
      <h3 className="text-lg font-bold mb-4">Statistiques générales</h3>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        <div className="stat-box bg-white p-4 rounded shadow">
          <p className="text-sm text-gray-600">Utilisateurs</p>
          <p className="text-2xl font-bold">{stats.totalUsers}</p>
        </div>
        <div className="stat-box bg-white p-4 rounded shadow">
          <p className="text-sm text-gray-600">Commandes à confirmer</p>
          <p className="text-2xl font-bold">{stats.ordersToConfirm}</p>
        </div>
        <div className="stat-box bg-white p-4 rounded shadow">
          <p className="text-sm text-gray-600">Commandes confirmées</p>
          <p className="text-2xl font-bold">{stats.confirmedOrders}</p>
        </div>
        <div className="stat-box bg-white p-4 rounded shadow">
          <p className="text-sm text-gray-600">Revenu total (FCFA)</p>
          <p className="text-2xl font-bold">{stats.totalRevenue.toLocaleString()}</p>
        </div>
      </div>
    </div>
  );
}

export default AdminStats;

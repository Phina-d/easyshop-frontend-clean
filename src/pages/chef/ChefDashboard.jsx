import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import "./DashboardStyle.css";

export default function ChefDashboard() {
  const [stats, setStats] = useState({
    totalUsers: 0,
    ordersToConfirm: 0,
    confirmedOrders: 0,
    totalRevenue: 0,
  });

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (!token) return;

    axios
      .get("http://localhost:5000/api/admin/stats", {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((res) => {
        console.log("Stats reçues :", res.data);
        setStats(res.data);
      })
      .catch((err) => {
        console.error("Erreur API stats :", err.response?.data || err.message);
      });
  }, []);

  return (
    <div className="dashboard-container">
      <h1 className="dashboard-title">Tableau de Bord - Chef</h1>

      <div className="dashboard-links">
        <Link to="/dashboard/chef">Mon profil</Link>
<Link to="/dashboard/chef/commandes">Commandes à traiter</Link>
<Link to="/dashboard/chef/prospects">Liste des prospects</Link>

      </div>

      <div className="dashboard-section">
        <h2>Statistiques Générales</h2>
        <table className="dashboard-table">
          <thead>
            <tr>
              <th>Utilisateurs</th>
              <th>Commandes à confirmer</th>
              <th>Commandes confirmées</th>
              <th>Revenus (FCFA)</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>{stats.totalUsers}</td>
              <td>{stats.ordersToConfirm}</td>
              <td>{stats.confirmedOrders}</td>
              <td>{stats.totalRevenue.toLocaleString()}</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}

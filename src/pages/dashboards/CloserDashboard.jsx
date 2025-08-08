import React from "react";
import "./DashboardStyle.css"; // Assure-toi que ce fichier existe bien dans src/
import { Link } from "react-router-dom";

const CloserDashboard = () => {
  return (
    <div className="dashboard-container">
      <h1 className="dashboard-title">Tableau de Bord - Closer</h1>

      {/* ✅ Lien vers la liste des clients */}
      <div className="dashboard-links">
        <Link
          to="/dashboard/closer/orders-to-confirm"
          className="btn btn-primary"
        >
          📦 Voir commandes à confirmer
        </Link>
        <Link
          to="/closer/clients"
          className="btn btn-primary ml-4"
        >
          📋 Voir la liste des clients
        </Link>
      </div>

      {/* Infos personnelles */}
      <div className="dashboard-section">
        <h2 className="section-title">Informations Personnelles</h2>
        <table className="dashboard-table">
          <thead>
            <tr>
              <th>Nom</th>
              <th>Email</th>
              <th>Téléphone</th>
              <th>Rôle</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Closer</td>
              <td>closer@exemple.com</td>
              <td>-</td>
              <td>closer</td>
            </tr>
          </tbody>
        </table>
      </div>

      {/* Commandes en attente */}
      <div className="dashboard-section">
        <h2 className="section-title">Commandes en Attente</h2>
        <table className="dashboard-table">
          <thead>
            <tr>
              <th>Client</th>
              <th>Date</th>
              <th>Montant</th>
              <th>Status</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Mme Ndiaye</td>
              <td>05/08/2025</td>
              <td>15 000 FCFA</td>
              <td>En attente</td>
            </tr>
            <tr>
              <td>M. Sow</td>
              <td>06/08/2025</td>
              <td>10 000 FCFA</td>
              <td>En cours</td>
            </tr>
          </tbody>
        </table>
      </div>

      {/* Historique */}
      <div className="dashboard-section">
        <h2 className="section-title">Historique des Commandes</h2>
        <table className="dashboard-table">
          <thead>
            <tr>
              <th>Client</th>
              <th>Date</th>
              <th>Montant</th>
              <th>Status</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Mme Ndiaye</td>
              <td>01/08/2025</td>
              <td>12 000 FCFA</td>
              <td>Livrée</td>
            </tr>
            <tr>
              <td>M. Ba</td>
              <td>30/07/2025</td>
              <td>9 000 FCFA</td>
              <td>Annulée</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default CloserDashboard;

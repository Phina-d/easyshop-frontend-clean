// src/pages/dashboards/ClientDashboard.jsx
import React from "react";
import { Link } from "react-router-dom";

export default function ClientDashboard() {
  return (
    <div className="p-6 bg-white rounded shadow-md max-w-3xl mx-auto mt-8">
      <h1 className="text-4xl font-bold mb-6 text-pink-600">Tableau de bord Client</h1>
      <ul className="list-disc list-inside text-lg space-y-3">
        <li>
          <Link to="/client/orders" className="text-blue-600 underline">
            🛍️ Mes commandes
          </Link>
        </li>
        <li>
          <Link to="/client/profile" className="text-blue-600 underline">
            📝 Mettre à jour mes informations
          </Link>
        </li>
        <li>
          <Link to="/client/payment-methods" className="text-blue-600 underline">
            💳 Gérer mes moyens de paiement
          </Link>
        </li>
        <li>
          <Link to="/client/support" className="text-blue-600 underline">
            💬 Contacter le support client
          </Link>
        </li>
      </ul>
    </div>
  );
}

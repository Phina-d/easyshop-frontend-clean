// src/pages/dashboards/ClientLayout.jsx
import React from "react";
import { Outlet, NavLink } from "react-router-dom";

export default function ClientLayout() {
  return (
    <div className="min-h-screen flex flex-col">
      {/* Exemple de menu client simple */}
      <nav className="bg-pink-600 text-white p-4 flex space-x-6">
       
        <NavLink
          to="orders"
          className={({ isActive }) =>
            isActive ? "underline font-bold" : "hover:underline"
          }
        >
          Mes commandes
        </NavLink>
        <NavLink
          to="profile"
          className={({ isActive }) =>
            isActive ? "underline font-bold" : "hover:underline"
          }
        >
          Profil
        </NavLink>
        <NavLink
          to="payment-methods"
          className={({ isActive }) =>
            isActive ? "underline font-bold" : "hover:underline"
          }
        >
          Moyens de paiement
        </NavLink>
        <NavLink
          to="support"
          className={({ isActive }) =>
            isActive ? "underline font-bold" : "hover:underline"
          }
        >
          Support
        </NavLink>
      </nav>

      {/* Contenu des sous-pages client */}
      <main className="flex-grow p-6 bg-gray-50">
        <Outlet />
      </main>
    </div>
  );
}

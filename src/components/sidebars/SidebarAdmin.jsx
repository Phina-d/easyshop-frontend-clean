import React from "react";
import { Link } from "react-router-dom";

export default function SidebarAdmin() {
  return (
    <aside className="w-64 h-screen bg-blue-900 text-white p-4">
      <h2 className="text-2xl font-bold mb-6">Admin</h2>
      <ul className="space-y-3">
        <li><Link to="/dashboard/admin" className="hover:underline">Dashboard</Link></li>
        <li><Link to="/admin/users" className="hover:underline">Gérer les utilisateurs</Link></li>
        <li><Link to="/admin/orders" className="hover:underline">Commandes</Link></li>
        <li><Link to="/admin/reports" className="hover:underline">Statistiques</Link></li>
       <Link to="/admin/commandes-a-confirmer">📋 Commandes à confirmer</Link>
       <Link to="/admin/prospects">👥 Prospects</Link>

      </ul>
    </aside>
  );
}

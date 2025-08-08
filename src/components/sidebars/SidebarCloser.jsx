import React from "react";
import { Link } from "react-router-dom";

export default function SidebarCloser() {
  return (
    <aside className="w-64 h-screen bg-purple-900 text-white p-4">
      <h2 className="text-2xl font-bold mb-6">Closer</h2>
      <ul className="space-y-3">
        <li><Link to="/dashboard/closer" className="hover:underline">Mon espace</Link></li>
        <li><Link to="/closer/objectifs" className="hover:underline">Mes objectifs</Link></li>
        <li><Link to="/closer/rendez-vous" className="hover:underline">Rendez-vous</Link></li>
      </ul>
    </aside>
  );
}

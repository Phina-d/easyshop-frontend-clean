// src/pages/chef/ChefLayout.jsx
import React from "react";
import { Outlet, NavLink } from "react-router-dom";
import "../../styles/ChefLayout.css"; // si tu veux un fichier CSS séparé

export default function ChefLayout() {
  return (
    <div className="chef-layout">
      <aside className="chef-sidebar">
        <ul>
          {/* <li><NavLink to="/chef/dashboard" activeclassname="active">Tableau de bord</NavLink></li>
          <li><NavLink to="/chef/profil" activeclassname="active">Mon profil</NavLink></li>
          <li><NavLink to="/chef/commandes" activeclassname="active">Commandes</NavLink></li>
          <li><NavLink to="/chef/prospects" activeclassname="active">Prospects</NavLink></li> */}
          {/* <li><NavLink to="/chef/closers" activeclassname="active">Closers</NavLink></li> */}
        </ul>
      </aside>
      
      <main className="chef-content">
        <Outlet />
      </main>
    </div>
  );
}

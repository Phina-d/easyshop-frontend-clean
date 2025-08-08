// src/pages/client/ClientProfile.jsx
import React, { useState } from "react";

export default function ClientProfile() {
  // Exemple d’état local, à remplacer par données réelles (API)
  const [profile, setProfile] = useState({
    nom: "Ndiaye",
    prenom: "Aminata",
    email: "aminata.ndiaye@example.com",
    telephone: "77 123 45 67",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setProfile((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Profil mis à jour (simulation)");
    // Ici, faire appel à API pour sauvegarder les données
  };

  return (
    <div className="max-w-xl mx-auto bg-white p-6 rounded shadow">
      <h2 className="text-2xl font-bold mb-4">Mon profil</h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label className="block font-semibold mb-1">Nom</label>
          <input
            type="text"
            name="nom"
            value={profile.nom}
            onChange={handleChange}
            className="w-full border p-2 rounded"
          />
        </div>
        <div>
          <label className="block font-semibold mb-1">Prénom</label>
          <input
            type="text"
            name="prenom"
            value={profile.prenom}
            onChange={handleChange}
            className="w-full border p-2 rounded"
          />
        </div>
        <div>
          <label className="block font-semibold mb-1">Email</label>
          <input
            type="email"
            name="email"
            value={profile.email}
            onChange={handleChange}
            className="w-full border p-2 rounded"
          />
        </div>
        <div>
          <label className="block font-semibold mb-1">Téléphone</label>
          <input
            type="tel"
            name="telephone"
            value={profile.telephone}
            onChange={handleChange}
            className="w-full border p-2 rounded"
          />
        </div>
        <button
          type="submit"
          className="bg-pink-600 text-white px-4 py-2 rounded hover:bg-pink-700"
        >
          Mettre à jour
        </button>
      </form>
    </div>
  );
}

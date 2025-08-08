// src/pages/Support.jsx
import React from "react";

export default function Support() {
  return (
    <div className="p-6 max-w-4xl mx-auto">
      <h1 className="text-3xl font-bold text-purple-700 mb-4">Support complet</h1>
      <p className="text-gray-700 mb-4">Ici, vous trouverez toutes les réponses à vos questions.</p>
      <ul className="list-disc list-inside text-gray-800 space-y-2">
        <li>Comment passer une commande</li>
        <li>Comment modifier ou annuler une commande</li>
        <li>Modes de paiement acceptés</li>
        <li>Suivi et livraison</li>
        <li>Retours et remboursements</li>
        <li>Contactez notre service client</li>
      </ul>
    </div>
  );
}

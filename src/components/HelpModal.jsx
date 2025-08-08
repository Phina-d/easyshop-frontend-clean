import React from "react";

export default function HelpModal({ onClose }) {
  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center">
      <div className="bg-white p-6 rounded-lg shadow-lg max-w-md w-full">
        <h2 className="text-xl font-bold mb-4">Besoin d’aide ?</h2>
        <p className="text-gray-700 mb-4">
          - Naviguez via la barre de menu pour consulter les produits.<br />
          - Utilisez le bouton panier pour voir les articles ajoutés.<br />
          - Connectez-vous ou créez un compte via "Connexion / Inscription".<br />
          - Cliquez sur un produit pour voir les détails.
        </p>
        <div className="flex justify-end">
          <button
            onClick={onClose}
            className="bg-purple-600 text-white px-4 py-2 rounded hover:bg-purple-700"
          >
            Fermer
          </button>
        </div>
      </div>
    </div>
  );
}

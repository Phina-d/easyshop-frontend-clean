// src/pages/client/ClientSupport.jsx
import React, { useState } from "react";

export default function ClientSupport() {
  const [message, setMessage] = useState("");
  const [sent, setSent] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (message.trim() === "") return alert("Veuillez écrire un message.");
    setSent(true);
    setMessage("");
    // Ici, appeler API pour envoyer message au support
  };

  return (
    <div className="max-w-xl mx-auto bg-white p-6 rounded shadow">
      <h2 className="text-2xl font-bold mb-4">Contactez le support client</h2>
      {sent && (
        <p className="mb-4 text-green-600">Message envoyé avec succès !</p>
      )}
      <form onSubmit={handleSubmit}>
        <textarea
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          rows="5"
          className="w-full border p-3 rounded resize-none"
          placeholder="Écrivez votre message ici..."
        ></textarea>
        <button
          type="submit"
          className="mt-3 bg-pink-600 text-white px-4 py-2 rounded hover:bg-pink-700"
        >
          Envoyer
        </button>
      </form>
    </div>
  );
}

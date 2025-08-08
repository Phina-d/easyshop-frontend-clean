import React, { useState } from "react";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Pour l'instant on simule l'envoi
    setSubmitted(true);
    // Réinitialiser le formulaire après 3 secondes
    setTimeout(() => {
      setSubmitted(false);
      setFormData({ name: "", email: "", message: "" });
    }, 3000);
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-purple-50 px-4 py-12">
      <form
        onSubmit={handleSubmit}
        className="bg-white p-8 rounded-lg shadow-md max-w-md w-full"
      >
        <h2 className="text-2xl font-bold mb-6 text-purple-700 text-center">
          Contactez-nous
        </h2>

        {submitted && (
          <p className="mb-4 text-green-600 font-semibold text-center">
            Merci pour votre message ! Nous vous répondrons bientôt.
          </p>
        )}

        <label className="block mb-2 font-semibold text-gray-700">Nom</label>
        <input
          type="text"
          name="name"
          required
          value={formData.name}
          onChange={handleChange}
          className="w-full p-2 mb-4 border border-gray-300 rounded"
          placeholder="Votre nom"
        />

        <label className="block mb-2 font-semibold text-gray-700">Email</label>
        <input
          type="email"
          name="email"
          required
          value={formData.email}
          onChange={handleChange}
          className="w-full p-2 mb-4 border border-gray-300 rounded"
          placeholder="exemple@domain.com"
        />

        <label className="block mb-2 font-semibold text-gray-700">Message</label>
        <textarea
          name="message"
          required
          value={formData.message}
          onChange={handleChange}
          className="w-full p-2 mb-6 border border-gray-300 rounded resize-none"
          rows={5}
          placeholder="Votre message"
        />

        <button
          type="submit"
          className="w-full bg-purple-600 text-white py-2 rounded hover:bg-purple-700 transition"
        >
          Envoyer
        </button>
      </form>
    </div>
  );
}

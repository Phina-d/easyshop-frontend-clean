import React, { useState } from "react";

export default function ClientPaymentMethods() {
  const [methods, setMethods] = useState([
    { id: 1, type: "Visa", number: "**** **** **** 1234" },
    { id: 2, type: "MasterCard", number: "**** **** **** 5678" },
    { id: 3, type: "PayPal", email: "monemail@paypal.com" },
  ]);

  const [showForm, setShowForm] = useState(false);
  const [newType, setNewType] = useState("Visa");
  const [newNumber, setNewNumber] = useState("");
  const [newEmail, setNewEmail] = useState("");

  const handleAddClick = () => setShowForm(true);

  const handleCancel = () => {
    setShowForm(false);
    setNewType("Visa");
    setNewNumber("");
    setNewEmail("");
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (newType === "PayPal") {
      if (!newEmail) {
        alert("Veuillez saisir un email PayPal");
        return;
      }
      setMethods((prev) => [
        ...prev,
        { id: Date.now(), type: "PayPal", email: newEmail },
      ]);
    } else {
      if (!newNumber) {
        alert("Veuillez saisir un numéro de carte");
        return;
      }
      setMethods((prev) => [
        ...prev,
        { id: Date.now(), type: newType, number: newNumber },
      ]);
    }
    setShowForm(false);
    setNewType("Visa");
    setNewNumber("");
    setNewEmail("");
  };

  const handleRemove = (id) => {
    setMethods((prev) => prev.filter((m) => m.id !== id));
  };

  return (
    <div className="max-w-xl mx-auto bg-white p-6 rounded shadow">
      <h2 className="text-2xl font-bold mb-4">Mes moyens de paiement</h2>

      {methods.length === 0 ? (
        <p>Vous n'avez aucun moyen de paiement enregistré.</p>
      ) : (
        <ul className="space-y-3">
          {methods.map(({ id, type, number, email }) => (
            <li
              key={id}
              className="flex justify-between items-center border p-3 rounded"
            >
              <span>
                {type === "PayPal"
                  ? `PayPal - ${email}`
                  : `${type} - ${number}`}
              </span>
              <button
                onClick={() => handleRemove(id)}
                className="text-red-600 hover:underline"
              >
                Supprimer
              </button>
            </li>
          ))}
        </ul>
      )}

      {!showForm && (
        <button
          onClick={handleAddClick}
          className="mt-4 bg-pink-600 text-white px-4 py-2 rounded hover:bg-pink-700"
        >
          Ajouter un moyen de paiement
        </button>
      )}

      {showForm && (
        <form onSubmit={handleSubmit} className="mt-4 space-y-3">
          <div>
            <label className="block font-semibold mb-1">Type de paiement</label>
            <select
              value={newType}
              onChange={(e) => setNewType(e.target.value)}
              className="w-full border px-3 py-2 rounded"
            >
              <option value="Visa">Visa</option>
              <option value="MasterCard">MasterCard</option>
              <option value="PayPal">PayPal</option>
            </select>
          </div>

          {newType === "PayPal" ? (
            <div>
              <label className="block font-semibold mb-1">Email PayPal</label>
              <input
                type="email"
                value={newEmail}
                onChange={(e) => setNewEmail(e.target.value)}
                placeholder="exemple@paypal.com"
                className="w-full border px-3 py-2 rounded"
                required
              />
            </div>
          ) : (
            <div>
              <label className="block font-semibold mb-1">Numéro de carte</label>
              <input
                type="text"
                value={newNumber}
                onChange={(e) => setNewNumber(e.target.value)}
                placeholder="**** **** **** 1234"
                className="w-full border px-3 py-2 rounded"
                required
              />
            </div>
          )}

          <div className="flex gap-4">
            <button
              type="submit"
              className="bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700"
            >
              Enregistrer
            </button>
            <button
              type="button"
              onClick={handleCancel}
              className="bg-gray-300 px-4 py-2 rounded hover:bg-gray-400"
            >
              Annuler
            </button>
          </div>
        </form>
      )}
    </div>
  );
}

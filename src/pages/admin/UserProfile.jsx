import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";

export default function UserProfile() {
  const { id } = useParams();
  const navigate = useNavigate();  
  const [user, setUser] = useState(null);
  const [error, setError] = useState("");
  
  useEffect(() => {
    const fetchUser = async () => {
      try {
        const token = localStorage.getItem("token");
        const res = await axios.get(`http://localhost:5000/api/users/${id}`, {
          headers: { Authorization: `Bearer ${token}` },
        });
        setUser(res.data);
      } catch (err) {
        setError("Erreur lors du chargement des données utilisateur.");
      }
    };

    fetchUser();
  }, [id]);

  if (error) return <p className="text-red-600">{error}</p>;
  if (!user) return <p>Chargement...</p>;

  return (
    <div className="p-6 max-w-2xl mx-auto bg-white shadow-md rounded">
      <button
        onClick={() => navigate(-1)}
        className="bg-gray-300 hover:bg-gray-400 text-gray-800 font-semibold py-2 px-4 rounded mb-4"
      >
        ← Retour
      </button>

      <h2 className="text-2xl font-semibold mb-4">Profil de {user.name}</h2>
      <p><strong>Nom :</strong> {user.name}</p>
      <p><strong>Email :</strong> {user.email}</p>
      <p><strong>Téléphone :</strong> {user.phoneNumber || "N/A"}</p>
      <p><strong>Rôle :</strong> {user.role}</p>
    </div>
  );
}

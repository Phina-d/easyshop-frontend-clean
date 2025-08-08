// src/pages/chef/ChefProspects.jsx
import React, { useEffect, useState } from "react";
import axios from "axios";

export default function ChefProspects() {
  const [prospects, setProspects] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchProspects = async () => {
      try {
        const res = await axios.get("http://localhost:5000/api/prospects", {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("token")}`,
          },
        });

        const data = res.data;

        if (Array.isArray(data)) {
          setProspects(data);
        } else if (Array.isArray(data.prospects)) {
          setProspects(data.prospects);
        } else {
          throw new Error("Format inattendu des données");
        }

        setLoading(false);
      } catch (err) {
        setError(err.response?.data?.message || err.message);
        setLoading(false);
      }
    };

    fetchProspects();
  }, []);

  if (loading) return <p>Chargement des prospects...</p>;
  if (error) return <p style={{ color: "red" }}>Erreur : {error}</p>;

  return (
    <div style={{ padding: 20 }}>
      <h1>Liste des Prospects</h1>
      {prospects.length === 0 ? (
        <p>Aucun prospect trouvé.</p>
      ) : (
        <table border="1" cellPadding="8" style={{ borderCollapse: "collapse", width: "100%" }}>
          <thead>
            <tr>
              <th>Nom</th>
              <th>Email</th>
              <th>Téléphone</th>
            </tr>
          </thead>
          <tbody>
            {prospects.map((prospect) => (
              <tr key={prospect._id || prospect.id}>
                <td>{prospect.name || "-"}</td>
                <td>{prospect.email || "-"}</td>
                <td>{prospect.phone || "-"}</td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
}

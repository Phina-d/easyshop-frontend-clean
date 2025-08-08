import React, { useEffect, useState } from "react";
import axios from "axios";
import jsPDF from "jspdf";
import "jspdf-autotable";
import { saveAs } from "file-saver";
import Papa from "papaparse";
import { useNavigate } from "react-router-dom";

const ClientListForCloser = () => {
  const [clients, setClients] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [filteredClients, setFilteredClients] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [sortConfig, setSortConfig] = useState({ key: null, direction: "asc" });
  const clientsPerPage = 10;
  const token = localStorage.getItem("token");
  const navigate = useNavigate();

  useEffect(() => {
    const fetchClients = async () => {
      try {
        const res = await axios.get("http://localhost:5000/api/users/clients", {
          headers: { Authorization: `Bearer ${token}` },
        });
        setClients(res.data);
        setFilteredClients(res.data);
      } catch (error) {
        console.error("Erreur lors de la récupération des clients", error);
      }
    };
    fetchClients();
  }, [token]);

  useEffect(() => {
    let results = clients.filter((client) =>
      `${client.prenom} ${client.nom}`.toLowerCase().includes(searchTerm.toLowerCase()) ||
      client.email?.toLowerCase().includes(searchTerm.toLowerCase())
    );

    // Appliquer tri si configuré
    if (sortConfig.key) {
      results = [...results].sort((a, b) => {
        let aKey, bKey;

        if (sortConfig.key === "nomComplet") {
          aKey = `${a.prenom} ${a.nom}`.toLowerCase();
          bKey = `${b.prenom} ${b.nom}`.toLowerCase();
        } else if (sortConfig.key === "createdAt") {
          aKey = new Date(a.createdAt);
          bKey = new Date(b.createdAt);
        } else {
          aKey = (a[sortConfig.key] || "").toString().toLowerCase();
          bKey = (b[sortConfig.key] || "").toString().toLowerCase();
        }

        if (aKey < bKey) return sortConfig.direction === "asc" ? -1 : 1;
        if (aKey > bKey) return sortConfig.direction === "asc" ? 1 : -1;
        return 0;
      });
    }

    setFilteredClients(results);
    setCurrentPage(1); // reset page on search or sort change
  }, [searchTerm, clients, sortConfig]);

  const exportPDF = () => {
    const doc = new jsPDF();
    doc.text("Liste des clients", 14, 10);
    const tableColumn = ["#", "Nom complet", "Email", "Téléphone", "Date d’inscription"];
    const tableRows = [];

    filteredClients.forEach((client, index) => {
      tableRows.push([
        index + 1,
        `${client.prenom || ""} ${client.nom || ""}`,
        client.email || "",
        client.telephone || "",
        new Date(client.createdAt).toLocaleDateString("fr-FR"),
      ]);
    });

    doc.autoTable({
      head: [tableColumn],
      body: tableRows,
      startY: 20,
    });

    doc.save("liste_clients.pdf");
  };

  const exportCSV = () => {
    const csvData = filteredClients.map((client, index) => ({
      "#": index + 1,
      "Nom complet": `${client.prenom || ""} ${client.nom || ""}`,
      Email: client.email,
      Téléphone: client.telephone,
      "Date d’inscription": new Date(client.createdAt).toLocaleDateString("fr-FR"),
    }));

    const csv = Papa.unparse(csvData);
    const blob = new Blob([csv], { type: "text/csv;charset=utf-8;" });
    saveAs(blob, "liste_clients.csv");
  };

  // Pagination logic
  const indexOfLastClient = currentPage * clientsPerPage;
  const indexOfFirstClient = indexOfLastClient - clientsPerPage;
  const currentClients = filteredClients.slice(indexOfFirstClient, indexOfLastClient);
  const totalPages = Math.ceil(filteredClients.length / clientsPerPage);

  // Fonction pour changer l'ordre de tri
  const requestSort = (key) => {
    let direction = "asc";
    if (sortConfig.key === key && sortConfig.direction === "asc") {
      direction = "desc";
    }
    setSortConfig({ key, direction });
  };

  // Icône flèche tri simple
  const getSortArrow = (key) => {
    if (sortConfig.key !== key) return null;
    return sortConfig.direction === "asc" ? "▲" : "▼";
  };

  return (
    <div className="p-6 bg-white rounded-lg shadow-md">
      <h2 className="text-2xl font-semibold mb-6 text-gray-800">📋 Liste des clients</h2>

      <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-6 gap-4">
        <input
          type="text"
          placeholder="🔍 Rechercher par nom ou email..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="border border-gray-300 rounded px-4 py-2 w-full md:w-1/2"
        />
        <div className="flex gap-2">
          <button
            onClick={exportPDF}
            className="bg-red-600 text-white px-4 py-2 rounded hover:bg-red-700"
          >
            📄 Exporter PDF
          </button>
          <button
            onClick={exportCSV}
            className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
          >
            📤 Exporter CSV
          </button>
        </div>
      </div>

      <div className="overflow-x-auto">
        <table className="w-full table-auto border border-gray-300 text-sm">
          <thead className="bg-gray-100 text-left cursor-pointer select-none">
            <tr>
              <th
                className="px-4 py-2 border"
                onClick={() => requestSort("#")}
                style={{ width: "40px" }}
              >
                #
              </th>
              <th
                className="px-4 py-2 border"
                onClick={() => requestSort("nomComplet")}
              >
                Nom complet {getSortArrow("nomComplet")}
              </th>
              <th
                className="px-4 py-2 border"
                onClick={() => requestSort("email")}
              >
                Email {getSortArrow("email")}
              </th>
              <th
                className="px-4 py-2 border"
                onClick={() => requestSort("telephone")}
              >
                Téléphone {getSortArrow("telephone")}
              </th>
              <th
                className="px-4 py-2 border"
                onClick={() => requestSort("createdAt")}
              >
                Date d’inscription {getSortArrow("createdAt")}
              </th>
              <th className="px-4 py-2 border" style={{ width: "140px" }}>
                Actions
              </th>
            </tr>
          </thead>
          <tbody>
            {currentClients.length > 0 ? (
              currentClients.map((client, index) => (
                <tr key={client._id} className="hover:bg-gray-50">
                  <td className="px-4 py-2 border">{indexOfFirstClient + index + 1}</td>
                  <td className="px-4 py-2 border">{`${client.prenom} ${client.nom}`}</td>
                  <td className="px-4 py-2 border">{client.email}</td>
                  <td className="px-4 py-2 border">{client.telephone}</td>
                  <td className="px-4 py-2 border">
                    {new Date(client.createdAt).toLocaleDateString("fr-FR")}
                  </td>
                  <td className="px-4 py-2 border">
                    <button
                      onClick={() => navigate(`/client/profile/${client._id}`)}
                      className="bg-indigo-600 text-white px-3 py-1 rounded hover:bg-indigo-700"
                    >
                      Voir fiche client
                    </button>
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan="6" className="text-center py-4 text-gray-500">
                  Aucun client trouvé.
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>

      {/* Pagination */}
      <div className="flex justify-center items-center mt-6 space-x-2">
        {Array.from({ length: totalPages }, (_, i) => (
          <button
            key={i + 1}
            onClick={() => setCurrentPage(i + 1)}
            className={`px-3 py-1 border rounded ${
              currentPage === i + 1 ? "bg-blue-600 text-white" : "bg-white text-blue-600"
            }`}
          >
            {i + 1}
          </button>
        ))}
      </div>
    </div>
  );
};

export default ClientListForCloser;

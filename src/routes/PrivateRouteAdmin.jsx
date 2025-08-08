import React from "react";
import { Navigate } from "react-router-dom";
import { jwtDecode } from "jwt-decode";

function PrivateRouteAdmin({ children }) {
  const token = localStorage.getItem("token");

  if (!token) {
    console.warn("Pas de token trouvé, redirection vers login");
    return <Navigate to="/login" />;
  }

  try {
    const decoded = jwtDecode(token);
    const userRole = decoded.role;
    console.log("Rôle décodé :", userRole);

    if (userRole === "admin") {
      return children;
    } else {
      console.warn("Accès refusé - rôle insuffisant");
      return <Navigate to="/unauthorized" />;
    }
  } catch (error) {
    console.error("Erreur de décodage du token :", error);
    return <Navigate to="/login" />;
  }
}

export default PrivateRouteAdmin;

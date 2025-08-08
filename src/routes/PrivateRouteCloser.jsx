// src/routes/PrivateRouteCloser.jsx
import React from "react";
import { Navigate } from "react-router-dom";

export default function PrivateRouteCloser({ children }) {
  const token = localStorage.getItem("token");
  let userRole = null;

  if (token) {
    try {
      const payload = JSON.parse(atob(token.split('.')[1]));
      userRole = payload.role;
    } catch {
      // token invalide
    }
  }

  if (!token || userRole !== "closer") {
    return <Navigate to="/unauthorized" replace />;
  }

  return children;
}

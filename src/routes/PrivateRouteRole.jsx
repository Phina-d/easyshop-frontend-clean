import React from "react";
import { Navigate } from "react-router-dom";
import { jwtDecode } from "jwt-decode"; // ✅ BON


function PrivateRouteRole({ children, allowedRoles }) {
  const token = localStorage.getItem("token");
  if (!token) return <Navigate to="/login" />;

  try {
    const decoded = jwtDecode(token);
    console.log("Rôle décodé dans PrivateRouteRole:", decoded.role);
    if (allowedRoles.includes(decoded.role)) {
      return children;
    }
    return <Navigate to="/unauthorized" />;
  } catch {
    return <Navigate to="/login" />;
  }
}

export default PrivateRouteRole;

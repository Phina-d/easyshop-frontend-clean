import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { jwtDecode } from "jwt-decode";

export default function DashboardRedirect() {
  const navigate = useNavigate();

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (token) {
      try {
        const decoded = jwtDecode(token);
        const role = decoded.role;

        if (role === "admin") navigate("/dashboard/admin");
        else if (role === "closer") navigate("/dashboard/closer");
        else if (role === "client") navigate("/dashboard/client");
        else navigate("/unauthorized");
      } catch (error) {
        navigate("/unauthorized"); // token corrompu
      }
    } else {
      navigate("/login"); // pas de token
    }
  }, [navigate]);

  return null;
}

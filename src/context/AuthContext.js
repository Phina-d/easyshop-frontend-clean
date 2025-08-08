import { createContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { jwtDecode } from "jwt-decode";
import { useContext } from "react";

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(() => {
    const token = localStorage.getItem("token");
    return token ? jwtDecode(token) : null;
  });

  const navigate = useNavigate();

  const login = (token) => {
  localStorage.setItem("token", token);
  const decodedUser = jwtDecode(token);

  // 💡 Ajoute cette ligne pour enregistrer le rôle
  localStorage.setItem("userRole", decodedUser.role);

  setUser(decodedUser);
};


  const logout = () => {
    localStorage.removeItem("token");
    setUser(null);
    navigate("/login");
  };

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (token) {
      setUser(jwtDecode(token));
    } else {
      setUser(null);
    }
  }, []);

  return (
    <AuthContext.Provider value={{ user, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

// ✅ Ajout du hook personnalisé :

export const useAuth = () => useContext(AuthContext);

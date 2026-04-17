import { createContext, useContext, useState } from "react";

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  const login = (email, password) => {
    console.log("Login:", email);
    setIsAuthenticated(true);
  };

  const register = (email, password, name) => {
    console.log("Register:", name, email);
    setIsAuthenticated(true);
  };

  const logout = () => {
    console.log("Logout");
    setIsAuthenticated(false);
  };

  return (
    <AuthContext.Provider value={{ isAuthenticated, login, register, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);

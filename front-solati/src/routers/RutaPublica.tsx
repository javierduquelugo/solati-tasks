import { Navigate } from "react-router-dom";

export const RutaPublica = ({ children }) => {
  const isAuthenticated = false;

  return isAuthenticated ? <Navigate to="/" /> : children;
};

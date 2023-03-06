import { useState } from "react";
import { Navigate } from "react-router-dom";

export const ProtectedRoute = ({ children }) => {
  const [token, setToken] = useState(null);

  if (!token) {
    return <Navigate to="/" replace />;
  }

  return children;
};

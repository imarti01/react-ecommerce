import { useState } from "react";
import { Navigate } from "react-router";

export const ProtectedRoute = ({ children }) => {
  const [token, setToken] = useState("kdkdkd");

  if (!token) {
    return <Navigate to="/order" replace />;
  }

  return children;
};

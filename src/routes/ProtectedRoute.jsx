import { Navigate } from "react-router";
import { useAuthContext } from "../hooks";

export const ProtectedRoute = ({ children }) => {
  const { authState } = useAuthContext();

  if (!authState.isLogged) {
    return <Navigate to="/login" replace />;
  }

  return children;
};

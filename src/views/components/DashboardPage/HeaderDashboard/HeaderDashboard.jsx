import { useNavigate } from "react-router-dom";
import { useAuthContext } from "../../../../hooks/UseAuthContext";

export const HeaderDashboard = () => {
  const { logout: logoutContext } = useAuthContext();
  const navigate = useNavigate();

  const logout = () => {
    logoutContext();
    navigate("/");
  };

  return (
    <div>
      <h2 onClick={logout}>LOGOUT</h2>
      <h2>PROFILE PAGE</h2>
    </div>
  );
};

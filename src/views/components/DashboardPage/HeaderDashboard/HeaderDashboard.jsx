import { useNavigate } from "react-router-dom";
import { useAuthContext } from "../../../../hooks/UseAuthContext";

import "./HeaderDashboard.scss";

export const HeaderDashboard = () => {
  const { logout: logoutContext } = useAuthContext();
  const navigate = useNavigate();

  const logout = () => {
    logoutContext();
    navigate("/");
  };

  return (
    <div className="header-dashboard">
      <h4 onClick={logout}>LOGOUT</h4>
      <h2>PROFILE PAGE</h2>
    </div>
  );
};

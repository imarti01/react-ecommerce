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

  const navigateHome = () => {
    navigate("/");
  };

  return (
    <div className="header-dashboard">
      <div>
        <h4 onClick={navigateHome}>HOME</h4>
        <h4 onClick={logout}>LOGOUT</h4>
      </div>
      <h2>PROFILE PAGE</h2>
    </div>
  );
};

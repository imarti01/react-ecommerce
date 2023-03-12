import { Link } from "react-router-dom";
import { useAuthContext } from "../../../../hooks";
import { TotalBoxesNav } from "../../TotalBoxesNav/TotalBoxesNav";
import "./NavBar.scss";

export const NavBar = () => {
  const { authState } = useAuthContext();
  const { isLogged } = authState;
  return (
    <nav className="navbar">
      <p className="navbar__contact">CONTACT</p>
      <p className="navbar__gloria">GLÒRIA</p>
      <div className="navbar__right-container">
        {isLogged ? (
          <Link to="/dashboard">
            <p>PROFILE PAGE</p>
          </Link>
        ) : (
          <Link to="/login">
            <p>LOGIN</p>
          </Link>
        )}

        <TotalBoxesNav className="navbar__right-container--cart" />
      </div>
    </nav>
  );
};

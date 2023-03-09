import { TotalBoxesNav } from "../../TotalBoxesNav/TotalBoxesNav";
import "./NavBar.scss";

export const NavBar = () => {
  return (
    <nav className="navbar">
      <p>CONTACT</p>
      <p className="navbar__gloria">GLÒRIA</p>
      <div className="navbar__right-container">
        <p>LOGIN</p>
        <TotalBoxesNav />
      </div>
    </nav>
  );
};

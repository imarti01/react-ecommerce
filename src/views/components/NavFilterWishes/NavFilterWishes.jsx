import { Link } from "react-router-dom";
import "./NavFilterWishes.scss";

export const NavFilterWishes = () => {
  return (
    <div className="nav">
      <Link to="/activeWishes">
        {" "}
        <h3>Active</h3>
      </Link>
      <h3 className="nav__separating">/</h3>
      <Link to="/completedWishes">
        <h3>Completed</h3>
      </Link>
      <h3 className="nav__separating">/</h3>
      <Link to="/">
        <h3>All</h3>
      </Link>
    </div>
  );
};

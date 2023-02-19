import { Link } from "react-router-dom";
import "./MainContainer.scss";

export default function MainContainer() {
  return (
    <div className="main-container">
      <h1>GLÒRIA</h1>
      <button className="main-container__button">
        <Link to={"/store"}>Buy Now</Link>
      </button>
      <h3>Discovering new ways to make chocolates...</h3>
    </div>
  );
}

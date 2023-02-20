import { Link } from "react-router-dom";
import "../MainPage/MainContainer.scss";

export const ButtonBuy = ({ link, className }) => {
  return (
    <button className={className}>
      <Link to={link}>BUY NOW</Link>
    </button>
  );
};

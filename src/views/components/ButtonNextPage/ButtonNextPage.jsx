import { Link } from "react-router-dom";
import "../MainPage/MainContainer.scss";

export const ButtonNextPage = ({ link, className, textButton }) => {
  return (
    <button className={className}>
      <Link to={link}>{textButton}</Link>
    </button>
  );
};

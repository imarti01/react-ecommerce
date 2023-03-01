import { NavFilterWishes } from "../";
import "./Footer.scss";

export const Footer = ({ totalWishes }) => {
  return (
    <div className="footer">
      <div>{totalWishes} WISHES</div>
      <NavFilterWishes />
    </div>
  );
};

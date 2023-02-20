import { BoxCard } from "../BoxCard/BoxCard";
import "./CartSection.scss";

export const CartSection = ({ cart }) => {
  return (
    <div>
      <h3>CART(1)</h3>
      {cart.map((box) => {
        return <BoxCard pcs={box.pcs} chocolates={box.chocolates} />;
      })}
    </div>
  );
};

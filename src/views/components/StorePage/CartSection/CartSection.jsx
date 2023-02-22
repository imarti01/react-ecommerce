import { useContext } from "react";
import { CartContext } from "../../../../context/CartContext";
import { BoxCard } from "../BoxCard/BoxCard";
import "./CartSection.scss";

export const CartSection = () => {
  const { cart, currentBox } = useContext(CartContext);

  return (
    <div>
      <BoxCard pcs={currentBox.pcs} chocolates={currentBox.chocolates} />;
      {cart.map((box, idx) => {
        return (
          <BoxCard
            pcs={box.pcs}
            chocolates={box.chocolates}
            key={"box" + (idx + 1)}
          />
        );
      })}
    </div>
  );
};

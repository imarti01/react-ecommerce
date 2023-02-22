import useCartContext from "../../../../hooks/useCartContext";
import { BoxCard } from "../BoxCard/BoxCard";

import "./CartSection.scss";

export const CartSection = () => {
  const { cart, currentBox } = useCartContext();

  return (
    <div className="cart-section">
      <div className="cart-section__background"></div>
      <div className="cart-section__cart">
        {currentBox.pcs !== 0 && (
          <BoxCard pcs={currentBox.pcs} chocolates={currentBox.chocolates} />
        )}
        {cart &&
          cart.map((box, idx) => {
            return (
              <BoxCard
                pcs={box.pcs}
                chocolates={box.chocolates}
                key={"box" + (idx + 1)}
              />
            );
          })}
        <img src="assets\icons\arrow-up(1).png" alt="" />
      </div>
    </div>
  );
};

import useCartContext from "../../../../hooks/useCartContext";
import { BoxCard } from "../BoxCard/BoxCard";

import "./CartSection.scss";

export const CartSection = () => {
  const { cart, currentBox, setIsCartOpen } = useCartContext();

  const closeCart = () => {
    setIsCartOpen(false);
  };

  return (
    <div className="cart-section">
      <div className="cart-section__background" onClick={closeCart}></div>
      <div className="cart-section__cart">
        <div>
          {!cart.length && currentBox.pcs === 0 && (
            <div className="cart-section__cart--empty">
              <h2>Your cart is empty.</h2>
            </div>
          )}
          {currentBox.pcs !== 0 && (
            <BoxCard pcs={currentBox.pcs} chocolates={currentBox.chocolates} />
          )}
          {cart.length > 0 &&
            cart.map((box, idx) => {
              return (
                <BoxCard
                  pcs={box.pcs}
                  chocolates={box.chocolates}
                  key={"box" + (idx + 1)}
                />
              );
            })}
        </div>
        <img
          className="cart-section__cart--btn"
          src="https://res.cloudinary.com/duokspzx0/image/upload/v1677145511/icons/arrow-up_2_opmi4t.png"
          alt="arrow-up"
          onClick={closeCart}
        />
      </div>
    </div>
  );
};

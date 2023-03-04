import { useCartContext, useCurrentBoxContext } from "../../../../hooks";
import { TotalBoxesNav } from "../../TotalBoxesNav/TotalBoxesNav";
import { CurrentBoxDetail, SummaryCard } from "../index";

import "./CartSection.scss";

export const CartSection = () => {
  const { state, closeCart } = useCartContext();
  const { cart } = state;
  const { state: currentBox } = useCurrentBoxContext();

  return (
    <div className="cart-section">
      <div className="cart-section__background" onClick={closeCart}></div>
      <div className="cart-section__cart">
        <TotalBoxesNav className="cart-section__cart--nav" />
        <div>
          {!cart.length && currentBox.pcs === 0 && (
            <div className="cart-section__cart--empty">
              <h2>Your cart is empty.</h2>
            </div>
          )}
          {currentBox.pcs !== 0 && (
            <CurrentBoxDetail
              pcs={currentBox.pcs}
              chocolates={currentBox.chocolates}
            />
          )}
          {cart.length > 0 &&
            cart.map((box, idx) => {
              return (
                <SummaryCard
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

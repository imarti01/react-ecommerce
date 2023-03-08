import { useCartContext, useCurrentBoxContext } from "../../../../hooks";
import { TotalBoxesNav } from "../../TotalBoxesNav/TotalBoxesNav";
import { CurrentBoxDetail, SummaryCard } from "../index";

import "./CartSection.scss";

export const CartSection = () => {
  const { cartState, closeCart } = useCartContext();
  const { cart } = cartState;
  const { currentBox } = useCurrentBoxContext();
  const { pcs } = currentBox;

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
          {pcs !== 0 && <CurrentBoxDetail />}
          {cart.length > 0 &&
            cart.map(({ id, units, pcs, chocolates, total }, idx) => {
              return (
                <SummaryCard
                  id={id}
                  units={units}
                  pcs={pcs}
                  chocolates={chocolates}
                  total={total}
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

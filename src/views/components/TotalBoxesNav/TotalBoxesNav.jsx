import React, { useEffect, useState } from "react";
import { useCartContext } from "../../../hooks/useCartContext";

export const TotalBoxesNav = ({ className }) => {
  const { cartState, openCart } = useCartContext();

  const [totalBoxes, setTotalBoxes] = useState(0);

  useEffect(() => {
    cartState.cart.length > 0 && setTotalBoxes(cartState.cart.length);
  }, [cartState]);
  return (
    <p className={className} onClick={openCart}>
      CART({totalBoxes})
    </p>
  );
};

import React, { useEffect, useState } from "react";
import { useCartContext } from "../../../hooks/useCartContext";

export const TotalBoxesNav = ({ className }) => {
  const { cartState, openCart } = useCartContext();
  const { cart } = cartState;

  const [totalBoxes, setTotalBoxes] = useState(0);

  useEffect(() => {
    setTotalBoxes(cart.length);
  }, [cart]);

  return (
    <p className={className} onClick={openCart}>
      CART({totalBoxes})
    </p>
  );
};

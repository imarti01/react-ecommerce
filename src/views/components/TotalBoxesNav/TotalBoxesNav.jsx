import React, { useEffect, useState } from "react";
import useCartContext from "../../../hooks/useCartContext";

export const TotalBoxesNav = ({ className }) => {
  const { cart } = useCartContext();
  const [totalBoxes, setTotalBoxes] = useState(0);

  useEffect(() => {
    cart.length > 0 && setTotalBoxes(cart.length);
  }, [cart]);
  return <p className={className}>CART({totalBoxes})</p>;
};

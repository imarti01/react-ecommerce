import React, { useEffect, useState } from "react";
import { useCartContext } from "../../../hooks/useCartContext";

export const TotalBoxesNav = ({ className }) => {
  const { state } = useCartContext();

  const [totalBoxes, setTotalBoxes] = useState(0);

  useEffect(() => {
    state.cart.length > 0 && setTotalBoxes(state.cart.length);
  }, [state]);
  return <p className={className}>CART({totalBoxes})</p>;
};

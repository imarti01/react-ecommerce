import { useState } from "react";
import { CartContext } from "./CartContext";

export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);
  const [currentBox, setCurrentBox] = useState({
    units: 1,
    pcs: 0,
    chocolates: [],
    total: 0,
  });
  const [isCartOpen, setIsCartOpen] = useState(false);

  return (
    <CartContext.Provider
      value={{
        cart,
        setCart,
        currentBox,
        setCurrentBox,
        isCartOpen,
        setIsCartOpen,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

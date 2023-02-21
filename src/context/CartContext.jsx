import { createContext, useState } from "react";

export const CartContext = createContext(null);

export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);
  const [currentBox, setCurrentBox] = useState({
    pcs: 0,
    chocolates: [],
  });

  return (
    <CartContext.Provider value={{ cart, setCart, currentBox, setCurrentBox }}>
      {children}
    </CartContext.Provider>
  );
};

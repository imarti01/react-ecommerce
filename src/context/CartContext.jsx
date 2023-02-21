import { createContext, useState } from "react";

export const CartContext = createContext(null);

export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);
  const [box, setBox] = useState({ pcs: 0, chocolates: [] });

  return (
    <CartContext.Provider value={{ cart, setCart, box, setBox }}>
      {children}
    </CartContext.Provider>
  );
};

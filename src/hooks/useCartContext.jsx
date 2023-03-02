import { useContext } from "react";
import { CartContext } from "../context/CartContext/CartContext";

export const useCartContext = () => useContext(CartContext);

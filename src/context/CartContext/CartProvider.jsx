import { useReducer } from "react";
import { cartReducer } from "../../reducers/cartReducer";
import { types } from "../../types/types";
import { CartContext } from "./CartContext";

const initialState = {
  cart: [],
  isCartOpen: false,
};

export const CartProvider = ({ children }) => {
  const [cartState, dispatch] = useReducer(cartReducer, initialState);

  const openCart = () => {
    dispatch({ type: types.OPEN_CART });
  };

  const closeCart = () => {
    dispatch({ type: types.CLOSE_CART });
  };

  const addBoxToCart = (box) => {
    dispatch({ type: types.ADD_CART, payload: box });
  };

  return (
    <CartContext.Provider
      value={{
        cartState,
        openCart,
        closeCart,
        addBoxToCart,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

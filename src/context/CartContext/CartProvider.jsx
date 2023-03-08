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
  const { cart } = cartState;

  const openCart = () => {
    dispatch({ type: types.OPEN_CART });
  };

  const closeCart = () => {
    dispatch({ type: types.CLOSE_CART });
  };

  const addBoxToCart = (box) => {
    dispatch({ type: types.ADD_CART, payload: box });
  };

  const changeUnitsBoxOnCart = (idBox, newUnits) => {
    const newArrCart = cart.map((box) => {
      return box.id === idBox ? { ...box, units: parseInt(newUnits) } : box;
    });
    dispatch({ type: types.CHANGE_UNITS, payload: newArrCart });
  };

  return (
    <CartContext.Provider
      value={{
        cartState,
        openCart,
        closeCart,
        addBoxToCart,
        changeUnitsBoxOnCart,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

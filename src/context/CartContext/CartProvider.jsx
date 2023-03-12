import { useReducer } from "react";
import { cartReducer } from "../../reducers/cartReducer";
import { types } from "../../reducers/types/types";
import { CartContext } from "./CartContext";

const initialState = {
  cart: [],
  isCartOpen: false,
  address: {},
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

  const deleteBoxToCart = (boxId) => {
    const newArrCart = cart.filter((box) => box.id !== boxId);
    dispatch({ type: types.DELETE_CART, payload: newArrCart });
  };

  const changeUnitsBoxOnCart = (idBox, newUnits) => {
    const newArrCart = cart.map((box) => {
      return box.id === idBox ? { ...box, units: parseInt(newUnits) } : box;
    });
    dispatch({ type: types.CHANGE_UNITS, payload: newArrCart });
  };

  const chooseAddress = (address) => {
    dispatch({ type: types.CHOOSE_ADDRESS, payload: address });
  };

  return (
    <CartContext.Provider
      value={{
        cartState,
        openCart,
        closeCart,
        addBoxToCart,
        changeUnitsBoxOnCart,
        chooseAddress,
        deleteBoxToCart,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

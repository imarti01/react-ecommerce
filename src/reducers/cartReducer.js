import { types } from "./types/types";

export const cartReducer = (state, action) => {
  const { type, payload } = action;
  switch (type) {
    case types.OPEN_CART:
      return { ...state, isCartOpen: true };
    case types.CLOSE_CART:
      return { ...state, isCartOpen: false };
    case types.ADD_CART:
      return { ...state, cart: [...state.cart, payload] };
    case types.DELETE_CART:
      return { ...state, cart: payload };
    case types.CHANGE_UNITS:
      return { ...state, cart: payload };
    case types.CHOOSE_ADDRESS:
      return { ...state, address: payload };
    case types.SAVE_LAST_ORDER:
      return { ...state, cart: [], address: {}, lastOrder: payload };
    default:
      return state;
  }
};

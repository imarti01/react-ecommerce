import { types } from "../types/types";

export const cartReducer = (state, action) => {
  switch (action.type) {
    case types.OPEN_CART:
      return { ...state, isCartOpen: true };
    case types.CLOSE_CART:
      return { ...state, isCartOpen: false };
    default:
      return state;
  }
};

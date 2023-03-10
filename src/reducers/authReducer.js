import { types } from "./types/types";

export const authReducer = (state, action) => {
  const { type, payload } = action;
  switch (type) {
    case types.REGISTER:
      return { user: payload, isLogged: true };
    case types.LOGIN:
      return { user: payload, isLogged: true };
    case types.LOGOUT:
      return { user: "", isLogged: false };
    case types.GET_USER_DATA:
      return { ...state, user: payload };
    case types.SAVE_ADDRESS:
      return { ...state, user: { ...state.user, savedAddress: payload } };
    case types.SAVE_PURCHASE:
      return { ...state, user: { ...state.user, purchaseHistory: payload } };

    default:
      return state;
  }
};

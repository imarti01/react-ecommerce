import { types } from "./types/types";

export const authReducer = (state, action) => {
  const { type, payload } = action;
  switch (type) {
    case types.REGISTER:
      return { userId: payload, isLogged: true };
    case types.LOGIN:
      return { userId: payload, isLogged: true };
    case types.LOGOUT:
      return { userId: "", isLogged: false };
    default:
      return state;
  }
};

import { types } from "./types/types";

export const authReducer = (state, action) => {
  const { type, payload } = action;
  switch (type) {
    case types.REGISTER:
      return { user: payload, isLogged: true };
    case types.LOGIN:
      return { user: payload, isLogged: true };
    default:
      return state;
  }
};

import { types } from "../types/types";

export const currentBoxReducer = (state, action) => {
  const { type, payload } = action;
  switch (type) {
    case types.CHOOSE_SIZE:
      return {
        ...state,
        pcs: payload,
      };
    case types.ADD_NEW_CHOC:
      return {
        ...state,
        chocolates: [
          ...state.chocolates,
          {
            units: payload.units,
            name: payload.name,
            price: payload.price,
          },
        ],
      };
    case types.INCREMENT_CHOC:
      return {
        ...state,
        chocolates: payload,
      };

    default:
      return state;
  }
};

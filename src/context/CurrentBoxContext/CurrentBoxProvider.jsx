import { useReducer } from "react";
import { currentBoxReducer } from "../../reducers/currentBoxReducer";
import { types } from "../../types/types";
import { CurrentBoxContext } from "./CurrentBoxContext";

const initialState = {
  units: 0,
  pcs: 0,
  chocolates: [],
  total: 0,
};

export const CurrentBoxProvider = ({ children }) => {
  const [state, dispatch] = useReducer(currentBoxReducer, initialState);
  const { units, pcs, chocolates, total } = state;

  const chooseSize = (pcs) => {
    dispatch({ type: types.CHOOSE_SIZE, payload: pcs });
  };

  const addChocolate = (name, price) => {
    const idxChocolate = chocolates.findIndex((chocolate) => {
      return chocolate.name === name;
    });

    if (idxChocolate < 0) {
      dispatch({
        type: types.ADD_NEW_CHOC,
        payload: { units: 1, name, price },
      });
    } else {
      const newArr = [...chocolates];
      newArr[idxChocolate].units += 1;
      dispatch({
        type: types.INCREMENT_CHOC,
        payload: newArr,
      });
    }
  };

  return (
    <CurrentBoxContext.Provider
      value={{
        state,
        chooseSize,
        addChocolate,
      }}
    >
      {children}
    </CurrentBoxContext.Provider>
  );
};

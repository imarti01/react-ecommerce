import { useReducer } from "react";
import { currentBoxReducer } from "../../reducers/currentBoxReducer";
import { types } from "../../types/types";
import { CurrentBoxContext } from "./CurrentBoxContext";

const initialState = {
  units: 1,
  pcs: 0,
  counterPcs: 0,
  chocolates: [],
  total: 0,
};

export const CurrentBoxProvider = ({ children }) => {
  const [currentBox, dispatch] = useReducer(currentBoxReducer, initialState);
  const { chocolates } = currentBox;

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
        payload: { chocolates: newArr, price },
      });
    }
  };

  const removeChocolate = (name, price) => {
    const idxChocolate = chocolates.findIndex((chocolate) => {
      return chocolate.name === name;
    });

    let newArr = [...chocolates];
    if (newArr[idxChocolate].units > 1) {
      newArr[idxChocolate].units -= 1;
    } else {
      newArr = newArr.filter(
        (chocolate) => chocolate.name !== newArr[idxChocolate].name
      );
    }

    dispatch({
      type: types.DECREMENT_CHOC,
      payload: { chocolates: newArr, price },
    });
  };

  return (
    <CurrentBoxContext.Provider
      value={{
        currentBox,
        chooseSize,
        addChocolate,
        removeChocolate,
      }}
    >
      {children}
    </CurrentBoxContext.Provider>
  );
};

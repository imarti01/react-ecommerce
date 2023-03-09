import React, { useReducer } from "react";
import { useFetch } from "../../hooks";
import { authReducer } from "../../reducers/authReducer";
import { types } from "../../reducers/types/types";
import { AuthContext } from "./AuthContext";

const initialState = { user: "", isLogged: false };

export const AuthProvider = ({ children }) => {
  const [authState, dispatch] = useReducer(authReducer, initialState);

  const register = (newUser) => {
    fetch("http://localhost:3004/users", {
      method: "POST",
      body: JSON.stringify(newUser),
      headers: {
        "content-type": "application/json",
      },
    }).catch((error) => console.error(error));
    dispatch({ type: types.REGISTER, payload: newUser.email });
  };

  const login = (user) => {
    dispatch({ type: types.LOGIN, payload: user });
  };

  return (
    <AuthContext.Provider value={{ authState, register, login }}>
      {children}
    </AuthContext.Provider>
  );
};

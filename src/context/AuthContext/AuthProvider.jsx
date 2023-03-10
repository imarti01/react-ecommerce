import React, { useEffect, useReducer } from "react";
import { authReducer } from "../../reducers/authReducer";
import { types } from "../../reducers/types/types";
import { AuthContext } from "./AuthContext";

const init = () => {
  const user = JSON.parse(localStorage.getItem("user"));
  return {
    isLogged: !!user,
    user: user,
  };
};

export const AuthProvider = ({ children }) => {
  const [authState, dispatch] = useReducer(authReducer, {}, init);

  useEffect(() => {
    if (authState.isLogged) {
      fetch(`http://localhost:3004/users/${authState.user.id}`)
        .then((res) => res.json())
        .then((data) => {
          dispatch({ type: types.GET_USER_DATA, payload: data });
        });
    }
  }, []);

  const register = (newUser) => {
    localStorage.setItem("user", JSON.stringify({ id: newUser.id }));
    dispatch({ type: types.REGISTER, payload: newUser });
  };

  const login = (user) => {
    localStorage.setItem("user", JSON.stringify({ id: user.id }));
    dispatch({ type: types.LOGIN, payload: user });
  };

  const logout = () => {
    localStorage.removeItem("user");
    dispatch({ type: types.LOGOUT });
  };

  return (
    <AuthContext.Provider value={{ authState, register, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

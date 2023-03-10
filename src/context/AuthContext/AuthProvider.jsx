import React, { useReducer } from "react";
import { authReducer } from "../../reducers/authReducer";
import { types } from "../../reducers/types/types";
import { AuthContext } from "./AuthContext";

const init = () => {
  const user = JSON.parse(localStorage.getItem("user"));
  return {
    isLogged: !!user,
    userId: user,
  };
};

export const AuthProvider = ({ children }) => {
  const [authState, dispatch] = useReducer(authReducer, {}, init);

  const register = (newUserId) => {
    localStorage.setItem("user", JSON.stringify(newUserId.id));
    fetch("http://localhost:3004/users", {
      method: "POST",
      body: JSON.stringify(newUserId),
      headers: {
        "content-type": "application/json",
      },
    }).catch((error) => console.error(error));
    dispatch({ type: types.REGISTER, payload: newUserId });
  };

  const login = (userId) => {
    localStorage.setItem("user", JSON.stringify(userId));
    dispatch({ type: types.LOGIN, payload: userId });
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

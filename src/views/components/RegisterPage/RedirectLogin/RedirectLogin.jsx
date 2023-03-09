import React from "react";
import { Link } from "react-router-dom";

export const RedirectLogin = () => {
  return (
    <p>
      If you already have an account, you will need to{" "}
      <Link to={"/login"}>LOGIN</Link>
    </p>
  );
};

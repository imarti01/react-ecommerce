import { Link } from "react-router-dom";

export const RedirectTo = ({ page }) => {
  const textRegister = "If you don't have an account yet";
  const textLogin = " If you already have an account";

  return (
    <p>
      {page === "/login" ? textLogin : textRegister}, you will need to{" "}
      <Link to={page}>{page === "/login" ? "LOGIN" : "REGISTER"}</Link>
    </p>
  );
};

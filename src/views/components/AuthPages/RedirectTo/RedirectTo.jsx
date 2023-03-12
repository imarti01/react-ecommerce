import { Link } from "react-router-dom";
import "./RedirectTo.scss";

export const RedirectTo = ({ page }) => {
  const textRegister = "If you don't have an account yet";
  const textLogin = " If you already have an account";

  return (
    <p className="redirect-to">
      {page === "/login" ? textLogin : textRegister}, you will need to{" "}
      <Link to={page}>{page === "/login" ? "LOGIN" : "REGISTER"}</Link>
    </p>
  );
};

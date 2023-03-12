import { FormLogin, RedirectTo } from "../../components";
import "./LoginPage.scss";

export const LoginPage = () => {
  return (
    <div className="login-page">
      <h2 className="login-page__title">LOGIN</h2>
      <FormLogin />
      <RedirectTo page={"/register"} />
    </div>
  );
};

import { FormRegister } from "../../components/AuthPages/FormRegister/FormRegister";
import { RedirectTo } from "../../components/AuthPages/RedirectTo/RedirectTo";
import "./RegisterPage.scss";

export const RegisterPage = () => {
  return (
    <div className="register-page">
      <h2 className="register-page__title">REGISTER</h2>
      <FormRegister />
      <RedirectTo page={"/login"} />
    </div>
  );
};

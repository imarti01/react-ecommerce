import { FormRegister } from "../../components/AuthPages.jsx/FormRegister/FormRegister";
import { RedirectTo } from "../../components/AuthPages.jsx/RedirectTo/RedirectTo";

export const RegisterPage = () => {
  return (
    <div>
      <h2>REGISTER</h2>
      <FormRegister />
      <RedirectTo page={"/login"} />
    </div>
  );
};

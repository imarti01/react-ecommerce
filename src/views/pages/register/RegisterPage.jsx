import { FormRegister } from "../../components/AuthPages/FormRegister/FormRegister";
import { RedirectTo } from "../../components/AuthPages/RedirectTo/RedirectTo";

export const RegisterPage = () => {
  return (
    <div>
      <h2>REGISTER</h2>
      <FormRegister />
      <RedirectTo page={"/login"} />
    </div>
  );
};

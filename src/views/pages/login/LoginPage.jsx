import { FormLogin } from "../../components/AuthPages/FormLogin/FormLogin";
import { RedirectTo } from "../../components/AuthPages/RedirectTo/RedirectTo";

export const LoginPage = () => {
  return (
    <div>
      <h2>LOGIN</h2>
      <FormLogin />
      <RedirectTo page={"/register"} />
    </div>
  );
};

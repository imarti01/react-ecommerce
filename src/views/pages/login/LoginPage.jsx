import { FormLogin } from "../../components/AuthPages.jsx/FormLogin/FormLogin";
import { RedirectTo } from "../../components/AuthPages.jsx/RedirectTo/RedirectTo";

export const LoginPage = () => {
  return (
    <div>
      <h2>LOGIN</h2>
      <FormLogin />
      <RedirectTo page={"/register"} />
    </div>
  );
};

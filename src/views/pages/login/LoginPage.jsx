import { FormLogin, RedirectTo } from "../../components";

export const LoginPage = () => {
  return (
    <div>
      <h2>LOGIN</h2>
      <FormLogin />
      <RedirectTo page={"/register"} />
    </div>
  );
};

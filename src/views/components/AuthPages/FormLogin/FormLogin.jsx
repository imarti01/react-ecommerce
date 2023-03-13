import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import { useAuthContext, useFetch } from "../../../../hooks";
import "./FormLogin.scss";

export const FormLogin = () => {
  const { login } = useAuthContext();
  const navigate = useNavigate();

  const [formLogin, setFormLogin] = useState({ email: "", password: "" });

  const handleFormLogin = ({ target }) => {
    const { name, value } = target;
    setFormLogin({
      ...formLogin,
      [name]: value,
    });
  };

  const user = useFetch(`http://localhost:3004/users?email=${formLogin.email}`);

  const submitLogin = (e) => {
    e.preventDefault();
    if (user.length < 1 || user[0].password !== formLogin.password) {
      Swal.fire({
        icon: "error",
        title: "Incorrect email or password",
        text: "Check that they are correct or, in case you are not yet registered, you should do so first",
        iconColor: "#221a14",
        color: "#221a14",
        background: "#DBD5CB",
        confirmButtonColor: "#6d7505",
      });
    } else {
      login(user[0]);
      navigate("/store");
    }
  };

  return (
    <form onSubmit={submitLogin} className="form-login">
      <label className="form-login__input-label">
        Email:
        <input
          type="email"
          name="email"
          value={formLogin.email}
          onChange={handleFormLogin}
          required
        />
      </label>
      <label className="form-login__input-label">
        Password:
        <input
          type="password"
          name="password"
          value={formLogin.password}
          onChange={handleFormLogin}
          required
        />
      </label>
      <button className="form-login__button">Submit</button>
    </form>
  );
};

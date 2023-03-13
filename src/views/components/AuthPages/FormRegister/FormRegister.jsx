import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import { useAuthContext } from "../../../../hooks";
import { useFetch } from "../../../../hooks/useFetch";
import uuid from "react-uuid";
import "./FormRegister.scss";

export const FormRegister = () => {
  const { register } = useAuthContext();

  const navigate = useNavigate();

  const [formRegister, setFormRegister] = useState({
    id: uuid(),
    name: "",
    surname: "",
    email: "",
    password: "",
    savedAddress: [],
    purchaseHistory: [],
  });

  const handleFormRegister = ({ target }) => {
    const { name, value } = target;
    setFormRegister({
      ...formRegister,
      [name]: value,
    });
  };

  const isAlreadyRegistered = useFetch(
    `http://localhost:3004/users?email=${formRegister.email}`
  );

  const submitRegister = (e) => {
    e.preventDefault();
    if (isAlreadyRegistered.length > 0) {
      Swal.fire({
        icon: "error",
        title: "Already exists an account associated with this email!",
        iconColor: "#221a14",
        color: "#221a14",
        background: "#DBD5CB",
        confirmButtonColor: "#6d7505",
      });
    } else {
      fetch("http://localhost:3004/users", {
        method: "POST",
        body: JSON.stringify(formRegister),
        headers: {
          "content-type": "application/json",
        },
      }).catch((error) => console.error(error));

      register(formRegister);
      navigate("/store");
    }
  };

  return (
    <form onSubmit={submitRegister} className="form-register">
      <label className="form-register__input-label">
        Name:
        <input
          type="text"
          name="name"
          value={formRegister.name}
          onChange={handleFormRegister}
          required
        />
      </label>
      <label className="form-register__input-label">
        Surname:
        <input
          type="text"
          name="surname"
          value={formRegister.surname}
          onChange={handleFormRegister}
          required
        />
      </label>
      <label className="form-register__input-label">
        Email:
        <input
          type="email"
          name="email"
          value={formRegister.email}
          onChange={handleFormRegister}
          required
        />
      </label>
      <label className="form-register__input-label">
        Password:
        <input
          type="password"
          name="password"
          value={formRegister.password}
          onChange={handleFormRegister}
          required
        />
      </label>
      <button className="form-register__button">Submit</button>
    </form>
  );
};

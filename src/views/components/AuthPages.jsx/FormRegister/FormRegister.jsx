import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import { useAuthContext } from "../../../../hooks";
import { useFetch } from "../../../../hooks/useFetch";

export const FormRegister = () => {
  const { register } = useAuthContext();
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    name: "",
    surname: "",
    email: "",
    password: "",
  });

  const handleFormData = ({ target }) => {
    const { name, value } = target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const isAlreadyRegistered = useFetch(
    `http://localhost:3004/users?email=${formData.email}`
  );

  const submitRegister = (e) => {
    e.preventDefault();
    if (isAlreadyRegistered.length > 0) {
      Swal.fire({
        icon: "error",
        title: "Already exists an account associated with this email!",
        footer: '<a href="http://localhost:3000/login">SIGN IN</a>',
      });
    } else {
      register(formData);
      navigate("/address");
    }
  };

  return (
    <form onSubmit={submitRegister}>
      <label>
        Name:
        <input
          type="text"
          name="name"
          value={formData.name}
          onChange={handleFormData}
          required
        />
      </label>
      <label>
        Surname:
        <input
          type="text"
          name="surname"
          value={formData.surname}
          onChange={handleFormData}
          required
        />
      </label>
      <label>
        Email:
        <input
          type="email"
          name="email"
          value={formData.email}
          onChange={handleFormData}
          required
        />
      </label>
      <label>
        Password:
        <input
          type="password"
          name="password"
          value={formData.password}
          onChange={handleFormData}
          required
        />
      </label>
      <button>Submit</button>
    </form>
  );
};

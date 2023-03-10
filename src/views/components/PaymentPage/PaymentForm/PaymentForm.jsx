import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

export const PaymentForm = () => {
  const navigate = useNavigate();

  const [formPayment, setFormPayment] = useState({
    number: "",
    name: "",
    expire: "",
    security: "",
  });

  const handleFormPayment = ({ target }) => {
    const { name, value } = target;
    setFormPayment({ ...formPayment, [name]: value });
  };

  const submitPayment = (e) => {
    e.preventDefault();
    navigate("/completed");
  };

  return (
    <form onSubmit={submitPayment}>
      <label>
        Card Number:
        <input
          type="text"
          pattern="[0-9\s]{13,19}"
          maxLength="19"
          name="number"
          value={formPayment.number}
          onChange={handleFormPayment}
          required
        />
      </label>
      <label>
        Name of Card:
        <input
          type="text"
          name="name"
          value={formPayment.name}
          onChange={handleFormPayment}
          required
        />
      </label>
      <label>
        Expiry Date:
        <input
          type="text"
          pattern="(?:0[1-9]|1[0-2])/[0-9]{2}"
          placeholder="MM/YY"
          name="expire"
          value={formPayment.expire}
          onChange={handleFormPayment}
          required
        />
      </label>
      <div>
        <label>
          Security code
          <input
            type="text"
            pattern="[0-9]{3}"
            name="security"
            value={formPayment.security}
            onChange={handleFormPayment}
            required
          />
        </label>{" "}
        <p>Back of card, last 3 digits</p>
      </div>
      <label>
        <input type="checkbox" />
        Save this card for future purchases
      </label>
      <button>COMPLETE PAYMENT</button>
    </form>
  );
};

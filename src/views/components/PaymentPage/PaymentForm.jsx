import { useNavigate } from "react-router-dom";
import { useAuthContext, useCartContext } from "../../../hooks";

import "./PaymentForm.scss";

export const PaymentForm = () => {
  const navigate = useNavigate();
  const { authState, savePurchaseHistory } = useAuthContext();
  const { user } = authState;
  const { cartState } = useCartContext();
  const { cart } = cartState;

  const submitPayment = (e) => {
    e.preventDefault();

    const date = new Date().toLocaleDateString();
    const purchase = { orderDate: date, boxes: cart, status: "confirmed" };

    fetch(`http://localhost:3004/users/${user.id}`, {
      method: "PUT",
      body: JSON.stringify({
        ...user,
        purchaseHistory: [...user.purchaseHistory, purchase],
      }),
      headers: {
        "content-type": "application/json",
      },
    }).catch((error) => console.error(error));

    savePurchaseHistory(purchase);
    navigate("/completed");
  };

  return (
    <div className="payment-form">
      <form onSubmit={submitPayment} className="payment-form__form">
        <label className="payment-form__form--input-label">
          Card Number:
          <input type="text" pattern="[0-9\s]{13,19}" maxLength="19" required />
        </label>
        <label className="payment-form__form--input-label">
          Name of Card:
          <input type="text" required />
        </label>
        <label className="payment-form__form--input-label">
          Expiry Date:
          <input
            type="text"
            pattern="(?:0[1-9]|1[0-2])/[0-9]{2}"
            placeholder="MM/YY"
            required
          />
        </label>
        <div>
          <label className="payment-form__form--input-label">
            Security code
            <input type="password" pattern="[0-9]{3}" required />
          </label>{" "}
          <p>Back of card, last 3 digits</p>
        </div>
        <button className="payment-form__form--button">COMPLETE PAYMENT</button>
      </form>
    </div>
  );
};

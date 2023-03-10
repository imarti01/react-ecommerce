import { useNavigate } from "react-router-dom";
import { useAuthContext, useCartContext } from "../../../../hooks";

export const PaymentForm = () => {
  const navigate = useNavigate();
  const { authState } = useAuthContext();
  const { user } = authState;
  const { cartState } = useCartContext();
  const { cart } = cartState;

  const submitPayment = (e) => {
    e.preventDefault();

    const date = new Date().toLocaleDateString();
    fetch(`http://localhost:3004/users/${user.id}`, {
      method: "PUT",
      body: JSON.stringify({
        ...user,
        purchaseHistory: [
          ...user.purchaseHistory,
          { orderDate: date, boxes: cart },
        ],
      }),
      headers: {
        "content-type": "application/json",
      },
    }).catch((error) => console.error(error));

    navigate("/completed");
  };

  return (
    <form onSubmit={submitPayment}>
      <label>
        Card Number:
        <input type="text" pattern="[0-9\s]{13,19}" maxLength="19" required />
      </label>
      <label>
        Name of Card:
        <input type="text" required />
      </label>
      <label>
        Expiry Date:
        <input
          type="text"
          pattern="(?:0[1-9]|1[0-2])/[0-9]{2}"
          placeholder="MM/YY"
          required
        />
      </label>
      <div>
        <label>
          Security code
          <input type="text" pattern="[0-9]{3}" required />
        </label>{" "}
        <p>Back of card, last 3 digits</p>
      </div>
      <button>COMPLETE PAYMENT</button>
    </form>
  );
};

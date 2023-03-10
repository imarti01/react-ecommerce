import { useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import uuid from "react-uuid";
import { useAuthContext } from "../../../../hooks";
import { useCartContext } from "../../../../hooks/useCartContext";

import "./FormAddress.scss";

export const FormAddress = () => {
  const { chooseAddress } = useCartContext();
  const { authState, saveAddressData } = useAuthContext();
  const { user } = authState;
  const navigate = useNavigate();
  const inputRef = useRef();

  const [formAddress, setFormAddress] = useState({
    id: uuid(),
    address: "",
    zip: "",
    city: "",
    phone: "",
  });

  const handleFormAddress = ({ target }) => {
    const { name, value } = target;
    setFormAddress({
      ...formAddress,
      [name]: value,
    });
  };

  const submitFormAddress = (e) => {
    e.preventDefault();

    if (inputRef.current.checked) {
      fetch(`http://localhost:3004/users/${user.id}`, {
        method: "PUT",
        body: JSON.stringify({
          ...user,
          savedAddress: [...user.savedAddress, formAddress],
        }),
        headers: {
          "content-type": "application/json",
        },
      }).catch((error) => console.error(error));

      saveAddressData(formAddress);
    }

    chooseAddress(formAddress);
    navigate("/order");
  };

  return (
    <form className="form-address" onSubmit={submitFormAddress}>
      <label className="form-address__input-label">
        Address:
        <input
          type="text"
          name="address"
          value={formAddress.address}
          onChange={handleFormAddress}
          required
        />
      </label>
      <label className="form-address__input-label">
        Zip Code:
        <input
          type="text"
          pattern="[0-9]{5}"
          maxLength="19"
          name="zip"
          value={formAddress.zip}
          onChange={handleFormAddress}
          required
        />
      </label>
      <label className="form-address__input-label">
        City:
        <input
          type="text"
          name="city"
          value={formAddress.city}
          onChange={handleFormAddress}
          required
        />
      </label>
      <label className="form-address__input-label">
        Phone:
        <input
          type="tel"
          name="phone"
          pattern="[0-9]{9}"
          minLength="9"
          maxLength="9"
          value={formAddress.phone}
          onChange={handleFormAddress}
          required
        />
      </label>
      <label className="form-address__checkbox-label">
        <input type="checkbox" ref={inputRef} />
        Save this address for future purchases
      </label>
      <button className="form-address__button">CONTINUE</button>
    </form>
  );
};

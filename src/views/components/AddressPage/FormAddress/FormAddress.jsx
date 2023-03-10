import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useCartContext } from "../../../../hooks/useCartContext";

export const FormAddress = () => {
  const { chooseAddress } = useCartContext();
  const navigate = useNavigate();
  const [formAddress, setFormAddress] = useState({
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
    chooseAddress(formAddress);
    navigate("/order");
  };

  return (
    <form onSubmit={submitFormAddress}>
      <label>
        Address:
        <input
          type="text"
          name="address"
          value={formAddress.address}
          onChange={handleFormAddress}
          required
        />
      </label>
      <label>
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
      <label>
        City:
        <input
          type="text"
          name="city"
          value={formAddress.city}
          onChange={handleFormAddress}
          required
        />
      </label>
      <label>
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
      <label>
        <input type="checkbox" />
        Save this address for future purchases
      </label>
      <button>CONTINUE</button>
    </form>
  );
};

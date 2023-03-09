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
        />
      </label>
      <label>
        Zip Code:
        <input
          type="text"
          name="zip"
          value={formAddress.zip}
          onChange={handleFormAddress}
        />
      </label>
      <label>
        City:
        <input
          type="text"
          name="city"
          value={formAddress.city}
          onChange={handleFormAddress}
        />
      </label>
      <label>
        Phone:
        <input
          type="text"
          name="phone"
          value={formAddress.phone}
          onChange={handleFormAddress}
        />
      </label>
      <button>CONTINUE</button>
    </form>
  );
};

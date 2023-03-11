import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useCartContext } from "../../../../hooks";
import { FormAddress } from "../FormAddress/FormAddress";
import "./SavedAddress.scss";

export const SavedAddress = ({ savedAddress }) => {
  const { chooseAddress } = useCartContext();
  const navigate = useNavigate();

  const [address, setAddress] = useState({});
  const [isNewAddressOpen, setIsNewAddressOpen] = useState(false);

  const handleAddress = (e, id) => {
    if (e.target.checked) {
      const addressChecked = savedAddress.find((address) => address.id === id);
      setAddress(addressChecked);
    }
  };

  const addNewAddress = () => {
    setIsNewAddressOpen(true);
  };
  const addSavedAddress = () => {
    setIsNewAddressOpen(false);
  };
  const chooseAddresSaved = () => {
    chooseAddress(address);
    navigate("/order");
  };

  return (
    <div className="saved-address">
      <div
        className={
          !isNewAddressOpen
            ? "saved-address__saved"
            : "saved-address__saved--inactive"
        }
      >
        <button onClick={addNewAddress}>New Address</button>
        <h3>Saved Address:</h3>
        {savedAddress.map(({ address, zip, city, phone, id }) => (
          <div key={id}>
            <input
              type="radio"
              name="address"
              onChange={(e) => handleAddress(e, id)}
            />
            <p>
              {address} {zip} {city} (Phone: {phone})
            </p>
          </div>
        ))}
        <button onClick={chooseAddresSaved}>CONTINUE</button>
      </div>
      <div
        className={
          isNewAddressOpen
            ? "saved-address__new"
            : "saved-address__new--inactive"
        }
      >
        <button onClick={addSavedAddress}>Saved Address</button>
        <h2>New Address</h2>
        <FormAddress />
      </div>
    </div>
  );
};

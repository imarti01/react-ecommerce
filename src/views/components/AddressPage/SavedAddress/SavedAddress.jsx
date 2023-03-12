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
    if (address.address) {
      chooseAddress(address);
      navigate("/order");
    }
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
        <div className="saved-address__saved--choose">
          <h3>Saved Address:</h3>
          {savedAddress.map(({ address, zip, city, phone, id }) => (
            <div
              className="saved-address__saved--choose--each-container"
              key={id}
            >
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
        </div>
        <button
          className="saved-address__saved--btn-new"
          onClick={addNewAddress}
        >
          New Address
        </button>
        <button
          className="saved-address__saved--btn-continue"
          onClick={chooseAddresSaved}
        >
          CONTINUE
        </button>
      </div>
      <div
        className={
          isNewAddressOpen
            ? "saved-address__new"
            : "saved-address__new--inactive"
        }
      >
        <button className="saved-address__new--saved" onClick={addSavedAddress}>
          Saved Address
        </button>
        <FormAddress />
      </div>
    </div>
  );
};

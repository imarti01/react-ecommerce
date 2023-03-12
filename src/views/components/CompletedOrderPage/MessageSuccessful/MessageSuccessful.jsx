import React from "react";
import { useCartContext } from "../../../../hooks";
import { SummaryCard } from "../../SummaryCard/SummaryCard";

export const MessageSuccessful = () => {
  const { cartState } = useCartContext();
  const { cart, address: shippingAddress } = cartState;
  const { address, city, zip, phone } = shippingAddress;
  return (
    <div>
      <h2>Your purchase has been successful!</h2>
      <h3>You can check the status of your order on your profile page</h3>
      <div>
        <h4>Order summary:</h4>
        {cart.length > 0 &&
          cart.map(({ id, units, pcs, chocolates, total }, idx) => {
            return (
              <div>
                <h3 className="summary-card__title">BOX {pcs} PCS</h3>
                <p className="summary-card__summary">
                  {chocolates &&
                    chocolates.map((chocolate, idx) => {
                      const unitsName = chocolate.units + " " + chocolate.name;
                      return idx === 0 ? unitsName : ", " + unitsName;
                    })}
                </p>
              </div>
            );
          })}
        <h4>Shipping Address:</h4>
        <p>{address}</p>
        <p>
          {zip} {city}
        </p>
        <p>Contact phone: {phone}</p>
      </div>
    </div>
  );
};

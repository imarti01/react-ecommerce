import { useCartContext } from "../../../hooks";

import "./MessageSuccessful.scss";

export const MessageSuccessful = () => {
  const { cartState } = useCartContext();
  const { lastOrder } = cartState;
  const { cart, address: deliveryAddress } = lastOrder;
  const { address, city, zip, phone } = deliveryAddress;

  return (
    <div className="message-successful">
      <h2 className="message-successful__title">
        Your purchase has been successful!
      </h2>
      <div className="message-successful__summary">
        <h4>Order summary:</h4>
        {cart.length > 0 &&
          cart.map(({ id, units, pcs, chocolates }) => {
            return (
              <div key={id}>
                <h3>
                  {units} BOX {pcs} PCS
                </h3>
                <p>
                  {chocolates &&
                    chocolates.map((chocolate, idx) => {
                      const unitsName = chocolate.units + " " + chocolate.name;
                      return idx === 0 ? unitsName : ", " + unitsName;
                    })}
                </p>
              </div>
            );
          })}
        <h4>Delivery Address:</h4>
        <div>
          <p>{address}</p>
          <p>
            {zip} {city}
          </p>
          <p>Contact phone: {phone}</p>
        </div>
      </div>
    </div>
  );
};

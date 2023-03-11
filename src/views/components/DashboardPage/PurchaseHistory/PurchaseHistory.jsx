import React from "react";
import { Link } from "react-router-dom";
import { useAuthContext } from "../../../../hooks";

export const PurchaseHistory = () => {
  const { authState } = useAuthContext();
  const { user } = authState;
  const { purchaseHistory } = user;

  return (
    <div>
      <h2>Historial of Purchase:</h2>
      {purchaseHistory &&
        purchaseHistory.map(({ orderDate, boxes }) => (
          <div key={orderDate}>
            <h3>{orderDate}</h3>
            <div>
              {boxes.map(({ units, pcs, id }) => (
                <div key={id}>
                  <h4>
                    {units} u BOX {pcs}
                  </h4>
                  <Link to={`${id}`}>
                    <h5>More Info</h5>
                  </Link>
                </div>
              ))}
            </div>
          </div>
        ))}
    </div>
  );
};

import React from "react";
import { Link } from "react-router-dom";
import { useAuthContext } from "../../../../hooks";

import "./PurchaseHistory.scss";

export const PurchaseHistory = () => {
  const { authState } = useAuthContext();
  const { user } = authState;
  const { purchaseHistory } = user;

  return (
    <div className="purchase-history">
      <h2 className="purchase-history__title">Historial of Purchase:</h2>
      {purchaseHistory &&
        purchaseHistory.map(({ orderDate, boxes }) => (
          <div className="purchase-history__purchase" key={orderDate}>
            <h3>{orderDate}</h3>
            <div className="purchase-history__purchase--detail">
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

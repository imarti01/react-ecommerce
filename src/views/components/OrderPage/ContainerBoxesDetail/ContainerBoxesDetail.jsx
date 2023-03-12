import React, { useEffect, useState } from "react";
import { useCartContext } from "../../../../hooks/useCartContext";
import { ButtonNextPage } from "../../ButtonNextPage/ButtonNextPage";
import { BoxDetail } from "../BoxDetail/BoxDetail";

import "./ContainerBoxesDetail.scss";

export const ContainerBoxesDetail = () => {
  const { cartState } = useCartContext();
  const { cart } = cartState;

  const [totalOrder, setTotalOrder] = useState(0);

  useEffect(() => {
    setTotalOrder(0);
    cart.map(({ units, total }) =>
      setTotalOrder((prev) => prev + units * total)
    );
  }, [cart]);

  return (
    <div className="container-boxes-detail">
      <div className="container-boxes-detail__container">
        <div className="container-boxes-detail__container--boxes">
          {cart.map((box, idx) => (
            <BoxDetail
              box={box}
              setTotalOrder={setTotalOrder}
              key={"box" + idx}
            />
          ))}
        </div>
        <h2>
          <span>TOTAL ORDER:</span> {totalOrder.toFixed(2)} €
        </h2>
      </div>
      <ButtonNextPage
        link="/payment"
        className="container-boxes-detail__continue"
        textButton="CONTINUE"
      />
    </div>
  );
};

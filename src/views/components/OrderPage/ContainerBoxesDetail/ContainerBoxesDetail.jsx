import React, { useState } from "react";
import { useCartContext } from "../../../../hooks/useCartContext";
import { ButtonNextPage } from "../../ButtonNextPage/ButtonNextPage";
import { BoxDetail } from "../BoxDetail/BoxDetail";

export const ContainerBoxesDetail = () => {
  const { cartState } = useCartContext();
  const { cart } = cartState;

  const [totalOrder, setTotalOrder] = useState(0);

  return (
    <div>
      <div>
        {cart.map((box, idx) => (
          <BoxDetail
            box={box}
            setTotalOrder={setTotalOrder}
            key={"box" + idx}
          />
        ))}
        <div>
          <div>
            <label>
              Do you have any discount code?
              <input type="text" />
            </label>
            <button>OK</button>
          </div>
          <div>
            <h3>discount:</h3>
            <h3>shipping: </h3>
            <h2>TOTAL ORDER: {totalOrder.toFixed(2)} </h2>
          </div>
        </div>
      </div>
      <ButtonNextPage link="/payment" className="" textButton="CONTINUE" />
    </div>
  );
};

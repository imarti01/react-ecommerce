import React from "react";
import { CompleteOrderNav } from "../../components/CompleteOrderNav/CompleteOrderNav";
import { ContainerBoxesDetail } from "../../components/OrderPage/ContainerBoxesDetail/ContainerBoxesDetail";

export const OrderPage = () => {
  return (
    <div>
      <CompleteOrderNav />
      <ContainerBoxesDetail />
    </div>
  );
};

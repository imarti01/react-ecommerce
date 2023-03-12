import React from "react";
import { CompleteOrderNav, ContainerAddress } from "../../components";

export const AddressPage = () => {
  return (
    <div className="address-page">
      <CompleteOrderNav activeClass="address" />
      <ContainerAddress />
    </div>
  );
};

import React from "react";
import { FormAddress } from "../../components/AddressPage/FormAddress/FormAddress";
import { CompleteOrderNav } from "../../components/CompleteOrderNav/CompleteOrderNav";

export const AddressPage = () => {
  return (
    <div>
      <CompleteOrderNav />
      <FormAddress />
    </div>
  );
};

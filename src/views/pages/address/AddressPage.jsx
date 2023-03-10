import React from "react";
import { FormAddress } from "../../components/AddressPage/FormAddress/FormAddress";
import { SavedAddress } from "../../components/AddressPage/SavedAddress/SavedAddress";
import { CompleteOrderNav } from "../../components/CompleteOrderNav/CompleteOrderNav";

export const AddressPage = () => {
  return (
    <div>
      <CompleteOrderNav />
      <FormAddress />
      <SavedAddress />
    </div>
  );
};

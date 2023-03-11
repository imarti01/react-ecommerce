import React from "react";
import { FormAddress, CompleteOrderNav, SavedAddress } from "../../components";

export const AddressPage = () => {
  return (
    <div>
      <CompleteOrderNav />
      <FormAddress />
      <SavedAddress />
    </div>
  );
};

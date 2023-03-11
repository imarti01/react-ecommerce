import React from "react";
import { useAuthContext } from "../../../hooks";
import { FormAddress, CompleteOrderNav, SavedAddress } from "../../components";

export const AddressPage = () => {
  const user = useAuthContext();
  console.log(user);
  return (
    <div>
      <CompleteOrderNav />
      <FormAddress />
      <SavedAddress />
    </div>
  );
};

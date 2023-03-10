import React from "react";
import { useAuthContext } from "../../../../hooks/UseAuthContext";

export const OrderStatus = () => {
  const data = useAuthContext();
  console.log(data);
  return <div>OrderStatus</div>;
};

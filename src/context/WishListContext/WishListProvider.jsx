import React, { useState } from "react";
import { WishListContext } from "./WishListContext";

export const WishListProvider = ({ children }) => {
  const [wishList, setWishList] = useState([]);

  const [currentBox, setCurrentBox] = useState({
    name: "",
    pcs: "",
    totalBox: 0,
    chocolates: [],
  });

  return (
    <WishListContext.Provider
      value={{ wishList, setWishList, currentBox, setCurrentBox }}
    >
      {children}
    </WishListContext.Provider>
  );
};

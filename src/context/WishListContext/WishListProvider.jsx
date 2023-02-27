import React, { useState } from "react";
import { WishListContext } from "./WishListContext";

export const WishListProvider = ({ children }) => {
  const [wishList, setWishList] = useState([]);

  return (
    <WishListContext.Provider value={{ wishList, setWishList }}>
      {children}
    </WishListContext.Provider>
  );
};

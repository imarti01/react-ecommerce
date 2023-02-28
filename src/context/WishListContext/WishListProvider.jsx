import React, { useEffect, useState } from "react";
import { WishListContext } from "./WishListContext";

export const WishListProvider = ({ children }) => {
  const [wishList, setWishList] = useState(
    JSON.parse(localStorage.getItem("wishes")) || []
  );

  const [currentBox, setCurrentBox] = useState({
    id: "",
    done: false,
    isEditing: false,
    name: "",
    pcs: "",
    totalBox: 0,
    chocolates: [],
  });

  const [counterChocolates, setCounterChocolates] = useState(null);

  return (
    <WishListContext.Provider
      value={{
        wishList,
        setWishList,
        currentBox,
        setCurrentBox,
        counterChocolates,
        setCounterChocolates,
      }}
    >
      {children}
    </WishListContext.Provider>
  );
};

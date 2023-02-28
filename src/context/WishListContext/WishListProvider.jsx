import React, { useEffect, useState } from "react";
import { WishListContext } from "./WishListContext";

export const WishListProvider = ({ children }) => {
  const [wishList, setWishList] = useState([]);

  const [currentBox, setCurrentBox] = useState({
    id: "",
    done: false,
    isEditing: false,
    name: "",
    pcs: "",
    totalBox: 0,
    chocolates: [],
  });

  useEffect(() => {
    const wishesStorage = localStorage.getItem("wishes");
    if (!wishesStorage) console.log(wishesStorage);
  });

  return (
    <WishListContext.Provider
      value={{ wishList, setWishList, currentBox, setCurrentBox }}
    >
      {children}
    </WishListContext.Provider>
  );
};

import { useContext } from "react";
import { CartContext } from "../../../context/CartContext";
import {
  NavBar,
  BoxesSection,
  DescriptionSection,
  ChocolatesSection,
  CartSection,
} from "../../components/StorePage/index";
import "./StorePage.scss";

export const StorePage = () => {
  const { isCartOpen } = useContext(CartContext);

  return (
    <>
      <NavBar />
      {isCartOpen ? <CartSection /> : null}
      <DescriptionSection />
      <BoxesSection />
      <ChocolatesSection />
    </>
  );
};

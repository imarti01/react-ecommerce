import useCartContext from "../../../hooks/useCartContext";
import {
  NavBar,
  BoxesSection,
  DescriptionSection,
  ChocolatesSection,
  CartSection,
} from "../../components/StorePage/index";
import "./StorePage.scss";

export const StorePage = () => {
  const { isCartOpen } = useCartContext();

  return (
    <>
      <NavBar />
      {isCartOpen && <CartSection />}
      <DescriptionSection />
      <BoxesSection />
      <ChocolatesSection />
    </>
  );
};

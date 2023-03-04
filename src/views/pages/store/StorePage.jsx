import { useRef } from "react";
import { useCartContext } from "../../../hooks/useCartContext";
import {
  NavBar,
  BoxesSection,
  DescriptionSection,
  ChocolatesSection,
  CartSection,
} from "../../components/StorePage/index";
import "./StorePage.scss";

export const StorePage = () => {
  const { state } = useCartContext();

  const boxSectionRef = useRef();
  const scrollBoxSection = () => {
    boxSectionRef.current.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <>
      <NavBar />
      {state.isCartOpen && <CartSection />}
      <DescriptionSection />
      <BoxesSection refProps={boxSectionRef} />
      <ChocolatesSection scrollBoxSection={scrollBoxSection} />
    </>
  );
};

import { useRef, useState } from "react";
import { useCartContext } from "../../../hooks/useCartContext";
import {
  NavBar,
  BoxesSection,
  DescriptionSection,
  ChocolatesSection,
  CartSection,
  CurrentBoxDetail,
} from "../../components/StorePage/index";
import "./StorePage.scss";

export const StorePage = () => {
  const { cartState } = useCartContext();

  const [isModalOpen, setIsModalOpen] = useState(false);

  const dialog = useRef();
  const boxSectionRef = useRef();
  const scrollBoxSection = () => {
    boxSectionRef.current.scrollIntoView({ behavior: "smooth" });
  };

  console.log();

  return (
    <div className={isModalOpen && "modal-active"}>
      <NavBar />
      {cartState.isCartOpen && <CartSection />}
      <DescriptionSection />
      <BoxesSection
        refProps={boxSectionRef}
        dialog={dialog}
        setIsModalOpen={setIsModalOpen}
      />
      <ChocolatesSection
        scrollBoxSection={scrollBoxSection}
        dialog={dialog}
        setIsModalOpen={setIsModalOpen}
      />
      <CurrentBoxDetail dialog={dialog} />
    </div>
  );
};

import { BoxesSection } from "../../components/StorePage/BoxesSection/BoxesSection";
import { ChocolatesSection } from "../../components/StorePage/ChocolatesSection/ChocolatesSection";
import { DescriptionSection } from "../../components/StorePage/DescriptionSection/DescriptionSection";
import { NavBar } from "../../components/StorePage/index";
import "./StorePage.scss";

export const StorePage = () => {
  return (
    <>
      <NavBar />
      <DescriptionSection />
      <BoxesSection />
      <ChocolatesSection />
    </>
  );
};

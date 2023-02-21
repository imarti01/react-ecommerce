import {
  NavBar,
  BoxesSection,
  DescriptionSection,
  ChocolatesSection,
} from "../../components/StorePage/index";
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

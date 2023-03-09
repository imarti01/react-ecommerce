import { ButtonNextPage } from "../ButtonNextPage/ButtonNextPage";
import "./MainContainer.scss";

export default function MainContainer() {
  return (
    <div className="main-container">
      <h1 className="main-container__title">GLÒRIA</h1>
      <ButtonNextPage
        link="/store"
        className={"main-container__button"}
        textButton="BUY NOW"
      />
      <h3 className="main-container__h3">
        Discovering new ways to make chocolates...
      </h3>
    </div>
  );
}

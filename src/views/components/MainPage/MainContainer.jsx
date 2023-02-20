import { ButtonBuy } from "../ButtonBuy/ButtonBuy";
import "./MainContainer.scss";

export default function MainContainer() {
  return (
    <div className="main-container">
      <h1 className="main-container__title">GLÒRIA</h1>
      <ButtonBuy link="/store" className={"main-container__button"} />
      <h3 className="main-container__h3">
        Discovering new ways to make chocolates...
      </h3>
    </div>
  );
}

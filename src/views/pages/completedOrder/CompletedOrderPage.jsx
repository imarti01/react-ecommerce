import { MessageSuccessful, ButtonNextPage } from "../../components";

import "./CompletedOrderPage.scss";

export const CompletedOrderPage = () => {
  return (
    <div className="completed-order-page">
      <MessageSuccessful />
      <div className="completed-order-page__container-btn">
        <ButtonNextPage
          link="/dashboard"
          className="completed-order-page__container-btn--profile"
          textButton="Profile Page"
        />
        <ButtonNextPage
          link="/"
          className="completed-order-page__container-btn--exit"
          textButton="Exit"
        />
      </div>
    </div>
  );
};

import { ButtonNextPage } from "../../components/ButtonNextPage/ButtonNextPage";
import { MessageSuccessful } from "../../components/CompletedOrderPage/MessageSuccessful/MessageSuccessful";

export const CompletedOrderPage = () => {
  return (
    <div>
      <MessageSuccessful />
      <ButtonNextPage
        link="/dashboard"
        className=""
        textButton="Profile Page"
      />
      <ButtonNextPage link="/" className="" textButton="Exit" />
    </div>
  );
};

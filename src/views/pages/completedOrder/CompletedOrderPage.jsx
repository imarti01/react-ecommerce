import { MessageSuccessful, ButtonNextPage } from "../../components";

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

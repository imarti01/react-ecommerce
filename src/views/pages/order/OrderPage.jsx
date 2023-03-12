import { CompleteOrderNav, ContainerBoxesDetail } from "../../components";

export const OrderPage = () => {
  return (
    <div>
      <CompleteOrderNav activeClass="confirm" />
      <ContainerBoxesDetail />
    </div>
  );
};

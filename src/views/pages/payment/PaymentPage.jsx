import { CompleteOrderNav, PaymentForm } from "../../components";

export const PaymentPage = () => {
  return (
    <div>
      <CompleteOrderNav activeClass="payment" />
      <PaymentForm />
    </div>
  );
};

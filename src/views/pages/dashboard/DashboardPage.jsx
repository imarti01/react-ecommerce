import { OrderStatus } from "../../components/DashboardPage/OrderStatus/OrderStatus";
import { PurchaseHistory } from "../../components/DashboardPage/PurchaseHistory/PurchaseHistory";

export const DashboardPage = () => {
  return (
    <div>
      <h2>PROFILE PAGE</h2>
      <OrderStatus />
      <PurchaseHistory />
    </div>
  );
};

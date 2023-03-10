import { HeaderDashboard } from "../../components/DashboardPage/HeaderDashboard/HeaderDashboard";
import { OrderStatus } from "../../components/DashboardPage/OrderStatus/OrderStatus";
import { PurchaseHistory } from "../../components/DashboardPage/PurchaseHistory/PurchaseHistory";

export const DashboardPage = () => {
  return (
    <>
      <HeaderDashboard />
      <OrderStatus />
      <PurchaseHistory />
    </>
  );
};

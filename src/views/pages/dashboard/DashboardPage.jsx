import {
  HeaderDashboard,
  OrderStatus,
  PurchaseHistory,
} from "../../components";

export const DashboardPage = () => {
  return (
    <>
      <HeaderDashboard />
      <OrderStatus />
      <PurchaseHistory />
    </>
  );
};

import { MainPage } from "../views/pages/main/MainPage";
import { OrderPage } from "../views/pages/order/OrderPage";
import { StorePage } from "../views/pages/store/StorePage";

const routes = [
  {
    path: "/",
    exact: true,
    isPrivate: false,
    component: MainPage,
  },
  {
    path: "/store",
    exact: true,
    isPrivate: false,
    component: StorePage,
  },
  {
    path: "/order",
    exact: true,
    isPrivate: false,
    component: OrderPage,
  },
];

export default routes;

import { MainPage, StorePage, OrderPage } from "../views/pages";

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

import { MainPage } from "../views/pages/main/MainPage";
import { StorePage } from "../views/pages/store/StorePage";

const routes = [
  {
    path: "/",
    exact: true,
    component: MainPage,
  },
  {
    path: "/store",
    exact: true,
    component: StorePage,
  },
];

export default routes;

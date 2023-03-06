import { MainPage } from "../views/pages/main/MainPage";
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
];

export default routes;

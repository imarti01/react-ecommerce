import {
  HandleBoxWishList,
  WishList,
  ActiveWishes,
  CompletedWishes,
} from "../views/pages";

const routes = [
  {
    path: "/",
    exact: true,
    component: WishList,
  },
  {
    path: "/handleBoxWishList",
    exact: true,
    component: HandleBoxWishList,
  },
  {
    path: "/activeWishes",
    exact: true,
    component: ActiveWishes,
  },
  {
    path: "/completedWishes",
    exact: true,
    component: CompletedWishes,
  },
];

export default routes;

import { HandleBoxWishList } from "../views/pages/HandleBoxWishList/HandleBoxWishList";
import { WishList } from "../views/pages/WishList/WishList";

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
];

export default routes;

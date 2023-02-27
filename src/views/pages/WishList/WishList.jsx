import useWishList from "../../../hooks/useWishList";
import { Header, Footer } from "../../components/index";
import { ContainerList } from "../../components/WishListPage/index";

export const WishList = () => {
  const { wishList } = useWishList();

  return (
    <>
      <Header title="WISH LIST" />
      <ContainerList />
      <Footer totalWishes={wishList.length} />
    </>
  );
};

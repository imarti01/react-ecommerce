import useWishList from "../../../hooks/useWishList";
import { Header, Footer, ContainerList } from "../../components";

export const WishList = () => {
  const { wishList } = useWishList();

  return (
    <>
      <Header title="WISH LIST" />
      <ContainerList listToRender={wishList} />
      <Footer totalWishes={wishList.length} />
    </>
  );
};

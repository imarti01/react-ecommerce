import useWishList from "../../../hooks/useWishList";
import { Header, Footer, ContainerList } from "../../components";

export const ActiveWishes = () => {
  const { wishList } = useWishList();

  const activeWishes = wishList.filter((wish) => !wish.done);

  return (
    <div>
      <Header title="Active Wishes" />
      <ContainerList listToRender={activeWishes} />
      <Footer totalWishes={activeWishes.length} />
    </div>
  );
};

import useWishList from "../../../hooks/useWishList";
import { Header, Footer, ContainerList } from "../../components";

export const CompletedWishes = () => {
  const { wishList } = useWishList();

  const completedWishes = wishList.filter((wish) => wish.done);

  return (
    <div>
      <Header title="Completed Wishes" />
      <ContainerList listToRender={completedWishes} />
      <Footer totalWishes={completedWishes.length} />
    </div>
  );
};

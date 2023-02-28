import useWishList from "../../../hooks/useWishList";
import { Header, Footer } from "../../components";

export const CompletedWishes = () => {
  const { wishList } = useWishList();

  return (
    <div>
      <Header title="COMPLETED WISHES" />
      <Footer totalWishes={wishList.length} />
    </div>
  );
};

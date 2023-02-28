import useWishList from "../../../hooks/useWishList";
import { Header, Footer } from "../../components";

export const ActiveWishes = () => {
  const { wishList } = useWishList();
  return (
    <div>
      <Header title="ACTIVE WISHES" />
      <Footer totalWishes={wishList.length} />
    </div>
  );
};

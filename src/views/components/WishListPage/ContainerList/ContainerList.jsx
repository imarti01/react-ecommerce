import useWishList from "../../../../hooks/useWishList";
import { AddNewBox } from "../../index";
import { ListWishes } from "../index";

export const ContainerList = () => {
  const { wishList } = useWishList();
  return (
    <>
      {wishList.length > 0 ? (
        <ListWishes />
      ) : (
        <div>
          <h3>You don't have any boxes on your wish list yet.</h3>
          <h3>
            You can create and add a box by clicking on the add icon below.
          </h3>
        </div>
      )}
      <AddNewBox />
    </>
  );
};

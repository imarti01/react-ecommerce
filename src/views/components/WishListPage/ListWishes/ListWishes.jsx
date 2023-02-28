import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import useWishList from "../../../../hooks/useWishList";

export const ListWishes = () => {
  const navigate = useNavigate();
  const { wishList, setWishList, setCurrentBox, setCounterChocolates } =
    useWishList();

  const changeDoneState = (id) => {
    const newWishList = wishList.map((wish) =>
      wish.id !== id ? wish : { ...wish, done: !wish.done }
    );
    setWishList(newWishList);
  };

  const editWishBox = (id) => {
    const boxToEdit = wishList.filter((wish) => wish.id === id);
    setCurrentBox({ ...boxToEdit[0], isEditing: true });
    navigate("/handleBoxWishList");
    const numOfPcs = Number(boxToEdit[0].pcs);
    setCounterChocolates(numOfPcs);
  };

  const removeWishBox = (id) => {
    const newWishList = wishList.filter((wish) => wish.id !== id);
    setWishList(newWishList);
  };

  useEffect(() => {
    localStorage.setItem("wishes", JSON.stringify(wishList));
  }, [wishList]);

  return (
    <ul>
      {wishList.map((wish) => (
        <li key={wish.id}>
          <input
            type="checkbox"
            onChange={() => changeDoneState(wish.id)}
            checked={wish.done}
          />
          <span>{wish.name}</span>
          <span>
            <span onClick={() => editWishBox(wish.id)}>Edit</span>
            <span onClick={() => removeWishBox(wish.id)}>Remove</span>
          </span>
        </li>
      ))}
    </ul>
  );
};

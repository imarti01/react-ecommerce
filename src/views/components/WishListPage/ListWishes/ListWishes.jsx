import { useEffect } from "react";
import useWishList from "../../../../hooks/useWishList";

export const ListWishes = () => {
  const { wishList, setWishList } = useWishList();

  const changeDoneState = (id) => {
    const newWishList = wishList.map((wish) =>
      wish.id !== id ? wish : { ...wish, done: !wish.done }
    );
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
            <span>Edit</span>
            <span>Remove</span>
          </span>
        </li>
      ))}
    </ul>
  );
};

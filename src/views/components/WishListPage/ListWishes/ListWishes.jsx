import useWishList from "../../../../hooks/useWishList";

export const ListWishes = () => {
  const { wishList, setWishList } = useWishList();

  const changeDoneState = (id) => {
    const newWishList = wishList.map((wish) =>
      wish.id !== id ? wish : { ...wish, done: !wish.done }
    );
    setWishList(newWishList);
  };

  return (
    <ul>
      {wishList.map((wish, idx) => (
        <li key={wish + idx}>
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

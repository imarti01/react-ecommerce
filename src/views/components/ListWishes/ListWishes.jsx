import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import useWishList from "../../../hooks/useWishList";
import "./ListWishes.scss";

export const ListWishes = ({ listToRender }) => {
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

  return (
    <ul className="ul">
      {listToRender.map((wish) => (
        <li className="ul__li" key={wish.id}>
          <input
            className="ul__li--checkbox"
            type="checkbox"
            onChange={() => changeDoneState(wish.id)}
            checked={wish.done}
          />
          <span className="ul__li--name">{wish.name}</span>
          <span className="ul__li--changes">
            <span onClick={() => editWishBox(wish.id)}>Edit</span>
            <span onClick={() => removeWishBox(wish.id)}>Remove</span>
          </span>
        </li>
      ))}
    </ul>
  );
};

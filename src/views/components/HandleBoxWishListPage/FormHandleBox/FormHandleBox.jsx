import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { v4 as uuid } from "uuid";
import { ChocolatesInfo, SizeBoxes } from "../../../../db/db";
import useWishList from "../../../../hooks/useWishList";
import { CardChocolateForm } from "../CardChocolateForm/CardChocolateForm";

export const FormHandleBox = () => {
  const navigate = useNavigate();
  const newId = uuid();
  const {
    currentBox,
    setCurrentBox,
    wishList,
    setWishList,
    counterChocolates,
    setCounterChocolates,
  } = useWishList();
  const { name, id, pcs, totalBox, isEditing } = currentBox;

  useEffect(() => {
    if (!id) setCurrentBox({ ...currentBox, id: newId });
  }, [currentBox]);

  const handleCurrentBox = ({ target }) => {
    const { name, value } = target;
    setCurrentBox({
      ...currentBox,
      [name]: value,
    });
  };

  const addToWishList = () => {
    if (isEditing) {
      const wishListWithoutCurrent = wishList.filter((wish) => wish.id !== id);
      setWishList([
        ...wishListWithoutCurrent,
        { ...currentBox, isEditing: false },
      ]);
    } else {
      setWishList([...wishList, currentBox]);
    }
    navigate("/");
    setCurrentBox({
      id: "",
      done: false,
      isEditing: false,
      name: "",
      pcs: "",
      totalBox: 0,
      chocolates: [],
    });
    setCounterChocolates(null);
  };

  return (
    <div>
      <label>
        Name of box:
        <input
          name="name"
          type="text"
          value={name}
          onChange={handleCurrentBox}
        />
      </label>
      <fieldset onChange={handleCurrentBox}>
        <legend> Choose the size of your box:</legend>
        {SizeBoxes.map((numPcs) => {
          return (
            <label key={numPcs + "pcs"}>
              <input
                type="radio"
                name="pcs"
                value={numPcs}
                key={numPcs + "pcs"}
                defaultChecked={numPcs == pcs}
              />
              {numPcs + "pcs"}
            </label>
          );
        })}
      </fieldset>
      <div>
        {ChocolatesInfo.map((chocolate) => (
          <CardChocolateForm chocolate={chocolate} key={chocolate.name} />
        ))}
      </div>
      <h3>Total:{totalBox.toFixed(2)}€</h3>
      <button disabled={pcs != counterChocolates} onClick={addToWishList}>
        Save
      </button>
    </div>
  );
};

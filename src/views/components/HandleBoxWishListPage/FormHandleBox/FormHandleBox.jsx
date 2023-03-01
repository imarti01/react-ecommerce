import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { v4 as uuid } from "uuid";
import { ChocolatesInfo, SizeBoxes } from "../../../../db/db";
import useWishList from "../../../../hooks/useWishList";
import { CardChocolateForm } from "../CardChocolateForm/CardChocolateForm";
import "./FormHandleBox.scss";

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

  const cancelNewBox = () => {
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
    <div className="form-handle-box">
      <div className="form-handle-box__first-second">
        <div className="form-handle-box__first-second--name">
          <h3>1.</h3>
          <label>
            Name of box:
            <input
              name="name"
              type="text"
              value={name}
              onChange={handleCurrentBox}
            />
          </label>
        </div>
        <div className="form-handle-box__first-second--size">
          <h3>2.</h3>
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
        </div>
      </div>
      <div className="form-handle-box__container-chocolates">
        <h3>3. </h3>
        <div className="form-handle-box__container-chocolates--chocolates">
          {ChocolatesInfo.map((chocolate) => (
            <CardChocolateForm chocolate={chocolate} key={chocolate.name} />
          ))}
        </div>
      </div>
      <div className="form-handle-box__footer">
        <h3 className="form-handle-box__footer--total">
          Total: {totalBox.toFixed(2)}€
        </h3>
        <div>
          <button disabled={pcs != counterChocolates} onClick={addToWishList}>
            Save
          </button>
          <button onClick={cancelNewBox}>Cancel</button>
        </div>
      </div>
    </div>
  );
};

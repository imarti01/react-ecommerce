import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { v4 as uuid } from "uuid";
import { ChocolatesInfo, SizeBoxes } from "../../../../db/db";
import useWishList from "../../../../hooks/useWishList";
import { CardChocolateForm } from "../CardChocolateForm/CardChocolateForm";

export const FormHandleBox = () => {
  const navigate = useNavigate();
  const newId = uuid();

  const { currentBox, setCurrentBox, wishList, setWishList } = useWishList();
  const { id, pcs, chocolates, totalBox } = currentBox;

  const [counterChocolates, setCounterChocolates] = useState(null);
  useEffect(() => {
    if (!id) setCurrentBox({ ...currentBox, id: newId });
  }, [currentBox]);

  const addChocolate = (chocolateToAdd) => {
    const { name, price } = chocolateToAdd;
    if (pcs !== 0) {
      const idxChocolate = chocolates.findIndex((chocolate) => {
        return chocolate.name === name;
      });

      if (idxChocolate < 0) {
        setCurrentBox({
          ...currentBox,
          totalBox: totalBox + price,
          chocolates: [...chocolates, { units: 1, name, price }],
        });
      } else {
        const newArr = [...chocolates];
        newArr[idxChocolate].units += 1;
        setCurrentBox({
          ...currentBox,
          totalBox: totalBox + price,
          chocolates: newArr,
        });
      }
      setCounterChocolates(counterChocolates + 1);
    } else {
      //missatge primer size (useRef???)
    }
  };

  const substractChocolate = (chocolateToSubstract) => {
    const { name, price } = chocolateToSubstract;

    const idxChocolate = chocolates.findIndex((chocolate) => {
      return chocolate.name === name;
    });

    let newArr = [...chocolates];
    if (newArr[idxChocolate].units > 1) {
      newArr[idxChocolate].units -= 1;
    } else {
      newArr = newArr.filter(
        (chocolate) => chocolate.name !== newArr[idxChocolate].name
      );
    }
    setCurrentBox({
      ...currentBox,
      totalBox: totalBox - price,
      chocolates: newArr,
    });

    setCounterChocolates(counterChocolates - 1);
  };

  const handleCurrentBox = ({ target }) => {
    const { name, value } = target;
    setCurrentBox({
      ...currentBox,
      [name]: value,
    });
  };

  const addToWishList = () => {
    setWishList([...wishList, currentBox]);
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
  };

  return (
    <div>
      <label>
        Name of box:
        <input
          name="name"
          type="text"
          value={currentBox.name}
          onChange={handleCurrentBox}
        />
      </label>
      <fieldset value={currentBox.size} onChange={handleCurrentBox}>
        <legend> Choose the size of your box:</legend>
        {SizeBoxes.map((pcs) => {
          return (
            <label key={pcs + "pcs"}>
              <input type="radio" name="pcs" value={pcs} key={pcs + "pcs"} />
              {pcs + "pcs"}
            </label>
          );
        })}
      </fieldset>
      <div>
        {ChocolatesInfo.map((chocolate) => (
          <CardChocolateForm
            chocolate={chocolate}
            key={chocolate.name}
            substractChocolate={substractChocolate}
            addChocolate={addChocolate}
          />
        ))}
      </div>
      <h3>Total:{totalBox.toFixed(2)}€</h3>
      <button disabled={pcs != counterChocolates} onClick={addToWishList}>
        Save
      </button>
    </div>
  );
};

import { useEffect, useState } from "react";
import { ChocolatesInfo, SizeBoxes } from "../../../../db/db";
import useWishList from "../../../../hooks/useWishList";
import { CardChocolateForm } from "../CardChocolateForm/CardChocolateForm";

export const FormHandleBox = () => {
  const { currentBox, setCurrentBox } = useWishList();
  const { pcs, chocolates, totalBox } = currentBox;

  const [counterChocolates, setCounterChocolates] = useState(0);

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

    const newArr = [...chocolates];
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

  useEffect(() => {}, [currentBox, counterChocolates]);

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
            <label>
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
      <h3>Total:{totalBox}€</h3>
      <button disabled={pcs !== counterChocolates}>Save</button>
    </div>
  );
};

import { useEffect, useState } from "react";
import useWishList from "../../../../hooks/useWishList";

export const CardChocolateForm = ({ chocolate }) => {
  const { src, name, price } = chocolate;
  const { currentBox, setCurrentBox, setCounterChocolates, counterChocolates } =
    useWishList();
  const { pcs, chocolates, totalBox } = currentBox;

  const [units, setUnits] = useState(0);

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

  useEffect(() => {
    const newUnits = chocolates.filter((choc) => choc.name === name);
    if (newUnits.length > 0) {
      setUnits(newUnits[0].units);
    } else {
      setUnits(0);
    }
  }, [currentBox]);

  return (
    <div>
      <img src={src} alt={name} />
      <h4>{price} €</h4>
      <h4>{name}</h4>
      <div>
        <button
          disabled={units < 1}
          onClick={() => substractChocolate(chocolate)}
        >
          -
        </button>
        <h4>{units}</h4>
        <button disabled={!pcs} onClick={() => addChocolate(chocolate)}>
          +
        </button>
      </div>
    </div>
  );
};

import { useEffect, useState } from "react";
import useWishList from "../../../../hooks/useWishList";

export const CardChocolateForm = ({
  chocolate,
  substractChocolate,
  addChocolate,
}) => {
  const { src, name, price } = chocolate;
  const { currentBox } = useWishList();
  const { pcs, chocolates } = currentBox;

  const [units, setUnits] = useState(0);

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

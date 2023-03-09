import React, { useEffect } from "react";
import { useCartContext } from "../../../../hooks/useCartContext";
import { UnitsBox } from "../../UnitsBox/UnitsBox";

export const BoxDetail = ({ box, setTotalOrder }) => {
  const { chocolates, pcs, total, units, id } = box;
  const { changeUnitsBoxOnCart } = useCartContext();

  useEffect(() => {
    setTotalOrder((prev) => prev + total);
  }, [setTotalOrder, total, units]);

  return (
    <div>
      <h2>{pcs}PCS BOX</h2>
      <ul>
        {chocolates.map(({ units, name, price }) => (
          <li key={name}>
            <span>{units}u</span>
            <span>{name}</span>
            <span>{(price * units).toFixed(2)} €</span>
          </li>
        ))}
      </ul>
      <UnitsBox
        id={id}
        units={units}
        total={total}
        changeUnitsBoxProvider={changeUnitsBoxOnCart}
      />
    </div>
  );
};

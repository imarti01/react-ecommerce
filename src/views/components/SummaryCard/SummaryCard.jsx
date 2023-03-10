import { useCartContext } from "../../../hooks";
import { UnitsBox } from "../UnitsBox/UnitsBox";
import "./SummaryCard.scss";

export const SummaryCard = ({ id, units, pcs, total, chocolates }) => {
  const { changeUnitsBoxOnCart } = useCartContext();

  return (
    <div>
      <h3>BOX {pcs} PCS</h3>
      <p>
        {chocolates.map((chocolate, idx) => {
          const unitsName = chocolate.units + " " + chocolate.name;
          return idx === 0 ? unitsName : ", " + unitsName;
        })}
      </p>
      <UnitsBox
        changeUnitsBoxProvider={changeUnitsBoxOnCart}
        id={id}
        units={units}
        total={total}
      />
    </div>
  );
};

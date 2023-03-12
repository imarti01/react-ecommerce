import { useCartContext } from "../../../../hooks/useCartContext";
import { UnitsBox } from "../../UnitsBox/UnitsBox";

import "./BoxDetail.scss";

export const BoxDetail = ({ box }) => {
  const { chocolates, pcs, total, units, id } = box;
  const { changeUnitsBoxOnCart } = useCartContext();

  return (
    <div className="box-detail">
      <div>
        <h2>{pcs}PCS BOX</h2>
        <ul>
          {chocolates.map(({ units, name, price }) => (
            <li key={name}>
              <span>
                <span>{units}u</span>
                <span>{name}</span>
              </span>
              <span>{(price * units).toFixed(2)} €</span>
            </li>
          ))}
        </ul>
      </div>
      <div className="box-detail__total-container">
        <UnitsBox
          id={id}
          units={units}
          total={total}
          changeUnitsBoxProvider={changeUnitsBoxOnCart}
        />
      </div>
    </div>
  );
};

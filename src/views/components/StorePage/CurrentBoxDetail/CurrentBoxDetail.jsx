import { useCurrentBoxContext } from "../../../../hooks";
import "./CurrentBoxDetail.scss";

export const CurrentBoxDetail = () => {
  const { addChocolate, removeChocolate, currentBox } = useCurrentBoxContext();
  const { pcs, chocolates, total, counterPcs } = currentBox;
  return (
    <div className="box-card">
      <h3 className="box-card__title">BOX {pcs} PCS</h3>
      {chocolates.map((chocolate) => {
        return (
          <div className="box-card__list" key={chocolate.name}>
            <p className="box-card__list--name">{chocolate.name}</p>
            <p className="box-card__list--units">
              <span
                onClick={() => removeChocolate(chocolate.name, chocolate.price)}
              >
                -
              </span>{" "}
              {chocolate.units}{" "}
              <span
                onClick={() => addChocolate(chocolate.name, chocolate.price)}
              >
                +
              </span>
            </p>
            <p>{(chocolate.price * chocolate.units).toFixed(2)} €</p>
          </div>
        );
      })}
      <div>
        <p>
          <span>-</span>1<span>+</span>
        </p>
        <p>Total Box: {total.toFixed(2)}€</p>
      </div>
      <button disabled={pcs !== counterPcs}>Buy</button>
    </div>
  );
};

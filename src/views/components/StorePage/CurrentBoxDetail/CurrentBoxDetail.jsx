import { useState } from "react";
import "./CurrentBoxDetail.scss";

export const CurrentBoxDetail = ({ pcs, chocolates }) => {
  const arrSubTotals = chocolates.map(
    (chocolate) => chocolate.units * chocolate.price
  );

  return (
    <div className="box-card">
      <h3 className="box-card__title">BOX {pcs} PCS</h3>
      {chocolates.map((chocolate) => {
        return (
          <div className="box-card__list" key={chocolate.name}>
            <p className="box-card__list--name">{chocolate.name}</p>
            <p className="box-card__list--units">
              <span>-</span> {chocolate.units} <span>+</span>
            </p>
            <p>{(chocolate.price * chocolate.units).toFixed(2)} €</p>
          </div>
        );
      })}
      <div>
        <p>
          <span>-</span>1<span>+</span>
        </p>
        <p>Total Box: {arrSubTotals.reduce((a, b) => a + b, 0).toFixed(2)}€</p>
      </div>
    </div>
  );
};

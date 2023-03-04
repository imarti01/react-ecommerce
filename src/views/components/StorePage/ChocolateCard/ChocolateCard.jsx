import { useEffect } from "react";
import { useCurrentBoxContext, useCartContext } from "../../../../hooks";

import "./ChocolateCard.scss";

export const ChocolateCard = ({ name, desc, src, price, scrollBoxSection }) => {
  const { state: currentBox, addChocolate } = useCurrentBoxContext();
  const { pcs } = currentBox;
  const { openCart } = useCartContext();

  const addCurrentBox = (name, price) => {
    if (pcs !== 0) {
      addChocolate(name, price);
      openCart();
    } else {
      scrollBoxSection();
    }
  };

  // useEffect(() => {
  //   const remainingPcs = pcs - chocolates.reduce((a, b) => a + b.units, 0);
  //   if (remainingPcs === 0 && pcs !== 0) {
  //     setCart([...cart, currentBox]);
  //     setCurrentBox({
  //       pcs: 0,
  //       chocolates: [],
  //     });
  //   }
  // }, [cart, chocolates, pcs, setCart, currentBox, setCurrentBox]);

  return (
    <div className="chocolate-card">
      <img src={src} alt={name} className="chocolate-card__img" />
      <h3 className="chocolate-card__name">{name}</h3>
      <p className="chocolate-card__desc">{desc}</p>
      <h3 className="chocolate-card__price">{price.toFixed(2)} €</h3>
      <button
        className="chocolate-card__btn"
        onClick={() => addCurrentBox(name, price)}
      >
        Add
      </button>
    </div>
  );
};

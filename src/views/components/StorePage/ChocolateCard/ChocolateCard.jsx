import { useEffect } from "react";
import { useCartContext } from "../../../../hooks/useCartContext";
import "./ChocolateCard.scss";

export const ChocolateCard = ({ name, desc, src, price, scrollBoxSection }) => {
  const { currentBox, setCurrentBox, cart, setCart, setIsCartOpen } =
    useCartContext();
  const { pcs, chocolates } = currentBox;

  const addChocolate = (name, price) => {
    if (currentBox.pcs !== 0) {
      const idxChocolate = chocolates.findIndex((chocolate) => {
        return chocolate.name === name;
      });

      if (idxChocolate < 0) {
        setCurrentBox({
          ...currentBox,
          chocolates: [...chocolates, { units: 1, name, price }],
        });
      } else {
        const newArr = [...chocolates];
        newArr[idxChocolate].units += 1;
        setCurrentBox({
          ...currentBox,
          chocolates: newArr,
        });
      }

      setIsCartOpen(true);
    } else {
      scrollBoxSection();
    }
  };

  useEffect(() => {
    const remainingPcs = pcs - chocolates.reduce((a, b) => a + b.units, 0);
    if (remainingPcs === 0 && pcs !== 0) {
      setCart([...cart, currentBox]);
      setCurrentBox({
        pcs: 0,
        chocolates: [],
      });
    }
  }, [cart, chocolates, pcs, setCart, currentBox, setCurrentBox]);

  return (
    <div className="chocolate-card">
      <img src={src} alt={name} className="chocolate-card__img" />
      <h3 className="chocolate-card__name">{name}</h3>
      <p className="chocolate-card__desc">{desc}</p>
      <h3 className="chocolate-card__price">{price.toFixed(2)} €</h3>
      <button
        className="chocolate-card__btn"
        onClick={() => addChocolate(name, price)}
      >
        Add
      </button>
    </div>
  );
};

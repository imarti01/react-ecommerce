import { useContext } from "react";
import { CartContext } from "../../../../context/CartContext";
import "./ChocolateCard.scss";

export const ChocolateCard = ({ name, desc, src, price }) => {
  const { box, setBox } = useContext(CartContext);

  const addChocolate = (name, price) => {
    setBox({ ...box, chocolates: [...box.chocolates, { name, price }] });
  };

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

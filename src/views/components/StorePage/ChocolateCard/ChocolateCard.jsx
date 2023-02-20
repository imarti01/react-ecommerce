import "./ChocolateCard.scss";

export const ChocolateCard = ({ name, desc, src, price }) => {
  return (
    <div className="chocolate-card">
      <img src={src} alt={name} className="chocolate-card__img" />
      <h3 className="chocolate-card__name">{name}</h3>
      <p className="chocolate-card__desc">{desc}</p>
      <h3 className="chocolate-card__price">{price.toFixed(2)} €</h3>
      <button className="chocolate-card__btn">Add</button>
    </div>
  );
};

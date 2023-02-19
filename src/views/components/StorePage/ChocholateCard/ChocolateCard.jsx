export const ChocolateCard = ({ name, src, price }) => {
  return (
    <div>
      <img src={src} alt={name} />
      <h3>{name}</h3>
      <h3>{price}</h3>
      <button>Add</button>
    </div>
  );
};

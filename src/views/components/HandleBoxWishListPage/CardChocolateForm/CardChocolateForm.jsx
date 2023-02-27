export const CardChocolateForm = ({
  chocolate,
  units,
  substractChocolate,
  addChocolate,
}) => {
  const { src, name, price } = chocolate;
  return (
    <div>
      <img src={src} alt={name} />
      <h4>{price} €</h4>
      <h4>{name}</h4>
      <div>
        <button
          disabled={units < 1}
          onClick={() => substractChocolate(chocolate)}
        >
          -
        </button>
        <h4>{units}</h4>
        <button onClick={() => addChocolate(chocolate)}>+</button>
      </div>
    </div>
  );
};

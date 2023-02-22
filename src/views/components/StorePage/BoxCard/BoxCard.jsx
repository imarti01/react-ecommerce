export const BoxCard = ({ pcs, chocolates, key }) => {
  return (
    <div>
      <h3>BOX {pcs} PCS</h3>
      {chocolates.map((chocolate) => {
        return (
          <div key={key + "_" + chocolate.name}>
            <p>{chocolate.units}</p>
            <p>{chocolate.name}</p>
            <p>{chocolate.price}/u</p>
          </div>
        );
      })}
    </div>
  );
};

export const BoxCard = ({ pcs, chocolates }) => {
  return (
    <div>
      <h2>Box {pcs} pcs</h2>
      <ul>
        {chocolates.map((chocolate) => {
          return <li>{chocolate}</li>;
        })}
      </ul>
    </div>
  );
};

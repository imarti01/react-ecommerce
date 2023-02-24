import "./SummaryCard.scss";

export const SummaryCard = ({ box, pcs, chocolates }) => {
  return (
    <div>
      <h3>BOX {pcs} PCS</h3>
      <p>
        {chocolates.map((chocolate, idx) => {
          const unitsName = chocolate.units + " " + chocolate.name;
          return idx === 0 ? unitsName : ", " + unitsName;
        })}
      </p>
      <div>
        <p>
          <span>-</span> {} <span>+</span>
        </p>
      </div>
    </div>
  );
};

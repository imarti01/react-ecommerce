import { useState } from "react";

export const UnitsBox = ({ total, id, units, changeUnitsBoxProvider }) => {
  const [unitsInput, setUnitsInput] = useState(units);

  const handleUnitsBox = ({ target }) => {
    setUnitsInput(target.value);
  };

  const changeUnitsBox = () => {
    console.log(id);
    changeUnitsBoxProvider(id, unitsInput);
  };

  return (
    <div>
      <input
        type="number"
        value={unitsInput}
        onChange={handleUnitsBox}
        onBlur={changeUnitsBox}
      />
      <p>Total: {(unitsInput * total).toFixed(2)} €</p>
    </div>
  );
};

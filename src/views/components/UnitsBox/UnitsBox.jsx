import { useState } from "react";
import "./UnitsBox.scss";

export const UnitsBox = ({ total, id, units, changeUnitsBoxProvider }) => {
  const [unitsInput, setUnitsInput] = useState(units);

  const handleUnitsBox = ({ target }) => {
    setUnitsInput(target.value);
  };

  const changeUnitsBox = () => {
    changeUnitsBoxProvider(id, unitsInput);
  };

  return (
    <div className="units-box">
      <input
        className="units-box__units"
        type="number"
        value={unitsInput}
        onChange={handleUnitsBox}
        onBlur={changeUnitsBox}
        min="1"
      />
      <p className="units-box__total">
        Total: {(unitsInput * total).toFixed(2)} €
      </p>
    </div>
  );
};

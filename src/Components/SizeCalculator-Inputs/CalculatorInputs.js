import React, { useContext } from "react";
import CalculatorContext from "../../store/sizeCalc-context";

const CalculatorInputs = () => {
const ctx = useContext(CalculatorContext)
  return (
    <div>
      <div>
        <label htmlFor="height">Heigth (cm)</label>
        <input
          type="number"
          id="height"
          value={ctx.height}
          onChange={ctx.heightChangeHandler}
        />
      </div>
      <div>
        <label htmlFor="weight">Weight (kg)</label>
        <input
          type="number"
          id="weight"
          value={ctx.weight}
          onChange={ctx.weightChangeHandler}
        />
      </div>
      <div>
        <label htmlFor="thickness">Water temp. (c°)</label>
        <input
          type="number"
          id="thickness"
          value={ctx.waterTemp}
          onChange={ctx.WetsuitThicknessHandler}
        />
      </div>

    </div>
  );
};

export default CalculatorInputs;

import React, { useState } from "react";
import CalculatorContext from "./sizeCalc-context";

const SizeCalcProvider = (props) => {
  const [enteredHeight, setEnteredHeight] = useState("");
  const [enteredWeight, setEnteredWeight] = useState("");
  const [enteredWaterTemp, setEnteredWaterTemp] = useState("");
  const [error, setError] = useState();

  const heightChangeHandler = (event) => {
    setEnteredHeight(event.target.value);
  };

  const weightChangeHandler = (event) => {
    setEnteredWeight(event.target.value);
  };

  const WetsuitThicknessHandler = (event) => {
    setEnteredWaterTemp(event.target.value);
  };



  const calculatorContext = {
    height: enteredHeight,
    heightChangeHandler: heightChangeHandler,
    setEnteredHeight: setEnteredHeight,
    weight: enteredWeight,
    weightChangeHandler: weightChangeHandler,
    setEnteredWeight: setEnteredWeight,
    waterTemp: enteredWaterTemp,
    WetsuitThicknessHandler: WetsuitThicknessHandler,
    setEnteredWaterTemp: setEnteredWaterTemp,
    error: error,
    setError: setError,
  };

  return (
    <CalculatorContext.Provider value={calculatorContext}>
      {props.children}
    </CalculatorContext.Provider>
  );
};

export default SizeCalcProvider;

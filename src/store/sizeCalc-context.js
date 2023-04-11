import React from "react";

const CalculatorContext = React.createContext({
  enteredHeight: "",
  heightChangeHandler: () => {},
  setEnteredHeight: () => {},
  enteredWeight: "",
  weightChangeHandler: () => {},
  setEnteredWeight: () => {},
  enteredWaterTemp: "",
  WetsuitThicknessHandler: () => {},
  setEnteredWaterTemp: () => {},
  error: "",
  errorHandler: () => {},
  setError: () => {},
});

export default CalculatorContext;

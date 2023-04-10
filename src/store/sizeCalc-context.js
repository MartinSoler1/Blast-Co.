import React from "react";

const CalculatorContext = React.createContext({
  height: "",
  heightChangeHandler: () => {},
  setEnteredHeight: () => {},
  weight: "",
  weightChangeHandler: () => {},
  setEnteredWeight: () => {},
  waterTemp: "",
  WetsuitThicknessHandler: () => {},
  setEnteredWaterTemp: () => {},
  error: "",
  errorHandler: () => {},
  setError: () => {},
});

export default CalculatorContext;

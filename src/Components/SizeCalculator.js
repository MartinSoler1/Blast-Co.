import React, { useContext, useState } from "react";
import Card from "../UI/Card";
import Button from "../UI/Button";
import classes from "./SizeCalculator.module.css";
import ErrorModal from "../UI/ErrorModal";
import CalculatorContext from "../store/sizeCalc-context";
import CalculatorInputs from "./SizeCalculator-Inputs/CalculatorInputs";

const SizeCalculator = (props) => {
  const [res, setRes] = useState("");

  const ctx = useContext(CalculatorContext);

  const sizeResultHandler = (event) => {
    event.preventDefault();

    if (
      ctx.height.trim().length === 0 || ctx.weight.trim().length === 0 || ctx.waterTemp.trim().length === 0 ) 
      {
      ctx.setError({
        title: "Invalid Input", message: "Please enter a valid value (non-empty values)",
      });
      return;
    }

    if (ctx.weight <= 0 || ctx.height <= 0 || ctx.waterTemp <= 0) {
      ctx.setError({
        title: "Invalid input", message: "Please enter a valid value (>0).",
      });
      return;
    }
    
    const sizeFilter = props.sizeList.wetsuitSize.filter((el) => {
      return (
        +ctx.weight >= el.minWieght && +ctx.weight <= el.maxWeight && +ctx.height >= el.minHeight && +ctx.height <= el.maxHeight
      );
    });

    const sizeResult = () => {
      return sizeFilter.length
        ? sizeFilter[0].size
        : props.sizeList.sizeMessage[0];
    };

    const thicknessFilter = props.sizeList.wetsThickness.filter((temp) => {
      return +ctx.waterTemp >= temp.minTemp && +ctx.waterTemp <= temp.maxTemp;
    });

    const thickResult = () => {
      return thicknessFilter.length
        ? thicknessFilter[0].thickness
        : props.sizeList.sizeMessage[1];
    };
    setRes(() => {
      return sizeResult() + " " + thickResult();
    });
    ctx.setEnteredHeight(""); 
    ctx.setEnteredWeight("");
    ctx.setEnteredWaterTemp("");
  };

  const finalResult = () => {
    return res.includes(props.sizeList.sizeMessage[0])
      ? props.sizeList.sizeMessage[0]
      : res.includes(props.sizeList.sizeMessage[1])
      ? props.sizeList.sizeMessage[1]
      : res;
  };

  const errorHandler = () => {
    ctx.setError(null);
  };

  return (
    <div>
      {ctx.error && (
        <ErrorModal
          title={ctx.error.title}
          message={ctx.error.message}
          onClose={errorHandler}
        />
      )}
      <Card className={classes.input}>
        <form onSubmit={sizeResultHandler}>
          <h3>Size Calculator</h3>
          <CalculatorInputs />
          <Button type="submit">Submit</Button>
        </form>
        <p >size recommended:</p>
        <div className={classes.res}>{finalResult()}</div>
        <p className={classes.message}>
          * This is a recommended size only. Please now click this hyperlink to
          our size chart and check your height and weight - we suggest opting
          for a size up if you’re in the higher end of the weight range and
          you're unfamiliar with how our wetsuits fit. If you have any queries
          please contact{" "}
          <a href="mailto:customerservice@blast.com">customer service</a>.
        </p>
      </Card>
    </div>
  );
};
export default SizeCalculator;

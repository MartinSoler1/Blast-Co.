import React, { useState } from "react";
import Card from "../UI/Card";
import Button from "../UI/Button";
import classes from "./SizeCalculator.module.css";
import ErrorModal from "../UI/ErrorModal";

const SizeCalculator = (props) => {
  const [enteredHeight, setEnteredHeight] = useState("");
  const [enteredWeight, setEnteredWeight] = useState("");
  const [enteredWaterTemp, setEnteredWaterTemp] = useState("");
  const [res, setRes] = useState("");
  const [thickness, setThickness] = useState("");
  const [error, setError] = useState();

  const sizeResultHandler = (event) => {
    event.preventDefault();

    if (
      enteredHeight.trim().length === 0 ||
      enteredWeight.trim().length === 0 ||
      enteredWaterTemp.trim().length === 0
    ) {
      setError({
        title: "Invalid Input",
        message: "Please enter a valid value (non-empty values)",
      });
      return;
    }

    if (enteredWeight <= 0 || enteredHeight <= 0 || enteredWaterTemp <= 0) {
      setError({
        title: "Invalid input",
        message: "Please enter a valid value (>0).",
      });
      return;
    }

    const sizeFilter = props.sizeList.wetsuitSize.filter(function (el) {
      return (
        +enteredWeight >= el.minWieght &&
        +enteredWeight <= el.maxWeight &&
        +enteredHeight >= el.minHeight &&
        +enteredHeight <= el.maxHeight
      );
    });

    const sizeResult = () => {
      if (sizeFilter[0] === undefined) {
        return props.sizeList.sizeMessage[0];
      } else {
        return sizeFilter[0].size;
      }
    };

    const thicknessFilter = props.sizeList.wetsThickness.filter(function (
      temp
    ) {
      return (
        +enteredWaterTemp >= temp.minTemp && +enteredWaterTemp <= temp.maxTemp
      );
    });

    const thickResult = () => {
      if (thicknessFilter[0] === undefined) {
        return props.sizeList.sizeMessage[1];
      } else {
        return thicknessFilter[0].thickness;
      }
    };

    setRes(() => {
      return sizeResult();
    });

    setThickness(() => {
      return thickResult();
    });
    setEnteredHeight("");
    setEnteredWeight("");
    setEnteredWaterTemp("");
  };

  const finalResult = () => {
    return res === props.sizeList.sizeMessage[0] 
      ? res
      : res + " " + thickness && thickness === props.sizeList.sizeMessage[1]
      ? thickness
      : res + " " + thickness;
  };

  const heightChangeHandler = (event) => {
    setEnteredHeight(event.target.value);
  };

  const weightChangeHandler = (event) => {
    setEnteredWeight(event.target.value);
  };

  const WetsuitThicknessHandler = (event) => {
    setEnteredWaterTemp(event.target.value);
  };


  const errorHandler = () => {
    setError(null);
  };

  return (
    <div>
      {error && (
        <ErrorModal
          title={error.title}
          message={error.message}
          onConfirm={errorHandler}
        />
      )}
      <Card className={classes.input}>
        <form onSubmit={sizeResultHandler}>
          <h3>Size Calculator</h3>
          <div>
            <label htmlFor="height">Heigth (cm)</label>
            <input
              type="number"
              id="height"
              value={enteredHeight}
              onChange={heightChangeHandler}
            />
          </div>
          <div>
            <label htmlFor="weight">Weight (kg)</label>
            <input
              type="number"
              id="weight"
              value={enteredWeight}
              onChange={weightChangeHandler}
            />
          </div>
          <div>
            <label htmlFor="thickness">Water temp. (c°)</label>
            <input
              type="number"
              id="thickness"
              value={enteredWaterTemp}
              onChange={WetsuitThicknessHandler}
            />
          </div>
          <Button type="submit">Submit</Button>
        </form>
        <p className={classes.size}>size recommended:</p>
        <div className={classes.res}>{finalResult()}</div>
        <p>
          * This is a recommended size only. Please now click this hyperlink to
          our size chart and check your height and weight - we suggest opting
          for a size up if you’re in the higher end of the weight range and
          you're unfamiliar with how our wetsuits fit. If you have any queries
          please contact
          <a href="mailto:customerservice@blast.com">customer service</a>.
        </p>
      </Card>
    </div>
  );
};
export default SizeCalculator;

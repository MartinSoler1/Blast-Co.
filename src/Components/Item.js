import React from "react";
import classes from "./Item.module.css";
import { useRef } from "react";
import { useContext } from "react";
import CartContext from "../store/cart-context";
import { useState } from "react";

const Item = (props) => {
  const [sizeSelected, setSizeSelected] = useState("S");

  const cartCtx = useContext(CartContext);
  const amountInputRef = useRef();
  const submitHandler = (event) => {
    event.preventDefault();
    const enteredAmount = amountInputRef.current.value;
    const enteredAmountNumber = +enteredAmount;

    if (
      enteredAmount.trim().length === 0 ||
      enteredAmountNumber < 1 ||
      enteredAmountNumber > 10
    ) {
      return;
    }

    cartCtx.addItem({
      id: props.id,
      name: props.name,
      size: sizeSelected,
      amount: enteredAmountNumber,
      price: props.price,
    });
  };


  return (
    <li className={classes.item}>
      <img src={props.photo} alt="person on a wetsuit" />
      <h3>{props.name}</h3>
      <div>{`$ ${props.price}`}</div>

      <form className={classes.form} onSubmit={submitHandler}>
        <div className={classes.details}>
          <p htmlFor="sizes">Size:</p>
          <select
            id="sizes"
            className="form-select w-25"
            aria-label="Default select example"
            value={sizeSelected}
            onChange={(event) => {
              setSizeSelected(event.target.value);
            }}
          >
            <option >S</option>
            <option>M</option>
            <option>L</option>
            <option>XL</option>
          </select>
        </div>
        <input
          ref={amountInputRef}
          label="Amount"
          id={"amount_" + props.id}
          type="number"
          min="1"
          max="5"
          step="1"
          defaultValue="1"
        />
        <button type="submit">+ Add to Cart</button>
      </form>
    </li>
  );
};

export default Item;

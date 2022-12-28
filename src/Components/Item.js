import React from "react";
import classes from "./Item.module.css";
import { useRef } from "react";
import { useContext } from "react";
import CartContext from "../store/cart-context";

const Item = (props) => {
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
            id:props.id,
            name:props.name,
            amount: enteredAmountNumber,
            price: props.price
        });
  
  };
  return (
    <li className={classes.item}>
      <img src={props.photo} alt="person on a wetsuit" />
      <h3>{props.name}</h3>
      <p>{props.description}</p>
      <div>{`$ ${props.price}`}</div>
      <form className={classes.form} onSubmit={submitHandler}>
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
        <button>+ Add to Cart</button>
      </form>
    </li>
  );
};

export default Item;

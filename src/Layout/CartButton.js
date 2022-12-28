import { useContext, useEffect, useState } from "react";
import CartIcon from "./CartIcon";
import CartContext from "../store/cart-context";
import classes from "./CartButton.module.css";




const CartButton = (props) => {
 const [bttnBigger, setBttnBigger] = useState(false);
  const cartCtx = useContext(CartContext);
  const { items } = cartCtx;

  const numberOfCartItems =  items.reduce((currNumber, item)=>{
    return currNumber + item.amount;
  }, 0);

  
const btnClasses = `${classes.button} ${bttnBigger ? classes.bump : ''}`;

useEffect(()=>{
  if(items.length === 0){return ;}
  setBttnBigger(true)
  const timer = setTimeout(() =>{setBttnBigger(false)}, 300);
  
  return () =>{
    clearTimeout(timer)
  }


},[items])

  return (
    <button className={btnClasses} onClick={props.onClick}>
      <span className={classes.icon} onClick={props.onClick}>
        <CartIcon />
      </span>
      <span className={classes.text}>Your Cart</span>
      <span className={classes.badge}>{numberOfCartItems}</span>
    </button>
  );
};

export default CartButton;

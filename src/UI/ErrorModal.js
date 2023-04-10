import React from "react";
import Button from "./Button";
import Modal from './Modal'
import classes from './Modal.module.css'

const ErrorModal = (props) =>{

    return(
      <Modal onClose={props.onClose} >
        <div >
       <header className={classes.header} >
          <h2>{props.title}</h2>
        </header>
        <div className={classes.message}>
          <p >{props.message}</p>
        </div>
        <footer className={classes.footer}>
            <Button onClick={props.onClose}>Okay</Button>
        </footer></div>
     </Modal>
      )   
    };

export default ErrorModal;
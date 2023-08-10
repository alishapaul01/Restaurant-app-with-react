import React, { useContext } from "react";
import classes from "./CartItem.module.css";
import CartContext from "../../Store/cart-context";

const CartItem = (props) => {
  const cxt = useContext(CartContext);

  return (
    <li key={props.id} className={classes['cart-item']}>
    <div>
          <h2>{props.name}</h2>
        <div>
        <span className={classes.price}>${props.price}</span>
        <span className={classes.quantity}> x{props.quantity} </span>
        </div>
    </div>
    <div className={classes.action}>
        <button onClick={() => cxt.quantityminus(props)}>-</button>
  
        <button onClick={() => cxt.quantityplus(props)}>+</button>
      </div>
      
    </li>
  );
};

export default CartItem;
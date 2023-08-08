import classes from './CartItem.module.css';

const CartItem = (props) => {
  return (
    <li className={classes['cart-item']}>
      <div>
        <h2>{props.name}</h2>
          <span className={classes.price}> ${props.price} </span>
          <span className={classes.quantity}>x {props.quantity}</span>
        </div>
        <div className={classes.actions}>
          <button onClick={props.onRemove}>-</button>
          <button onClick={props.onAdd}>+</button>
        </div>
    </li>
  );
};

export default CartItem;
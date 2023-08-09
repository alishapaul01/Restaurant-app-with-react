import { useContext } from 'react';
import Modal from '../UI/Modal';
import CartItem from './CartItem';
import classes from './Cart.module.css';
import CartContext from '../../Store/cart-context';

const Cart = (props) => {
  const cartCtx = useContext(CartContext);

  const totalAmount = `$${cartCtx.totalAmount.toFixed(2)}`;
  const hasItems = cartCtx.items.length > 0;

  const cartItemRemoveHandler = (id) => { // Fix the syntax here
    // Your logic for removing an item from the cart
    cartCtx.removeItem(id);
  };

  const cartItemAddHandler = (item) => {
    // Your logic for adding an item to the cart
    cartCtx.addItem({...item, amount:1})
  };

  const cartItems = (
    <ul className={classes['cart-items']}>
      {cartCtx.items.map((item) => (
        <CartItem
          key={item.id}
          name={item.name} 
          amount={item.amount}
          price={item.price} 
          onRemove={() => cartItemRemoveHandler(item.id)} // Pass id as an argument
          onAdd={() => cartItemAddHandler(item)} // Pass the item as an argument
        />
      ))}
    </ul>
  );

  return (
    <Modal onClose={props.onClose}>
      {cartItems}
      <div className={classes.total}>
        <span>Total Amount</span>
        <span>{totalAmount}</span>
      </div>
      <div className={classes.actions}>
        <button className={classes['button--alt']} onClick={props.onClose}>Close</button>

        {hasItems && <button className={classes.button}>Order</button>}
      </div>
    </Modal>
  );
};

export default Cart;
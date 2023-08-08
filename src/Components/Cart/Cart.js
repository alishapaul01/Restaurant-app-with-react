import Modal from '../Cart/Modal';
import classes from './Cart.module.css';
import { useContext } from 'react';
import CartContext from '../../Store/cart-context';
import CartItem from './CartItem';

const Cart = (props) => {
  
  
  const cartcntx= useContext(CartContext);
  let totalAmount=0;
  cartcntx.items.map((item)=>{
    return (totalAmount+= Number(item.price))
  })

  const cartItems = (<ul className={classes['cart-items']}>
      {cartcntx.items.map((item)=>(
      <CartItem 
      name={item.name} 
      price= {item.price} 
      quantity= { item.quantity}/>
      ))} 
    </ul>);

  return (
    <Modal onClose={props.onClose}>
      {cartItems}
      <div className={classes.total}>
        <span>Total Amount</span>
        <span>$ {totalAmount}</span>
      </div>
      <div className={classes.actions}>
        <button className={classes['button--alt']} onClick={props.onClose}>
          Close
        </button>
        <button className={classes.button}>Order</button>
      </div>
    </Modal>
  );
  };

export default Cart;
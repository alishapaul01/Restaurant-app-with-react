import Modal from '../Cart/Modal';
import classes from './Cart.module.css';
import { useContext } from 'react';
import CartContext from '../../Store/cart-context';
import CartItem from './CartItem';

const Cart = (props) => {
  
  
  const cartcntx= useContext(CartContext);
  let totalAmount=0;
  cartcntx.items.map((item)=>{
    return (totalAmount+= Number(item.price * item.quantity))
  })

  
  const cartItemRemoveHandler = (id) => {
    cartcntx.removeItem(id);
  };
  const cartItemAddHandler = (item) => {
    cartcntx.addItem({...item, quantity: 1});
  };
  const cartItems = (<ul className={classes['cart-items']}>
      {cartcntx.items.map((item)=>(
      <CartItem 
          key={item.id}
          name={item.name}
          quantity={item.quantity}
          price={item.price}
          onRemove={cartItemRemoveHandler.bind(null,item.id)}
          onAdd={cartItemAddHandler.bind(null,item)}
          />
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
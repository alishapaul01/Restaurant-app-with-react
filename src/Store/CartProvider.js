
import { useState } from 'react';
import CartContext from './cart-context';

const CartProvider = (props) => {
  const [items, updateItems] = useState([]);

  const addItemToCartHandler = (item) => {
    updateItems([...items,item])
  };

  const removeItemFromCartHandler = (id) =>{ 
    const newUpdatedItems= items.filter((item)=>item.id!==id)
    updateItems(newUpdatedItems, items.quantity--,)
  };
  
  const cartContext = {
    items: items,
    addItem: addItemToCartHandler,
    removeItem: removeItemFromCartHandler,
    
  };

  return (
    <CartContext.Provider value={cartContext}>
      {props.children}
    </CartContext.Provider>
  );
};

export default CartProvider;
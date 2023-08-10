import Input from "../../UI/Input";
import classes from "./Form.module.css";
import React,{useContext} from "react";
import cartCtx from '../../../Store/cart-context';

const Form = (props) => {
    const cartCntx=useContext(cartCtx)

    const addItemToCart=(event)=>{
        event.preventDefault();
        
        const quantity=document.getElementById('amount_'+props.id).value
        cartCntx.addItem({...props.item, quantity:quantity}) //all values are copied by spread
    }
  return (
    <form className={classes.form}>
        {console.log('inside render',cartCntx.items)}
        {console.log(cartCntx)}
      <Input
        label="Amount"
        input={{
          id: "amount_"+props.id,
          type: "number",
          min: "1",
          max: "5",
          step: "1",
          defaultValue: "1",
        }}
      />
      <button className={classes.button} onClick={addItemToCart}>+Add</button>
    </form>
  );
};
export default Form;
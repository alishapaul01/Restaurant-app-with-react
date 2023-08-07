import classes from'./Form.module.css';
import Input from '../../UI/Input';
import { useContext } from 'react';
import CartContext from '../../../Store/cart-context';
const Form=(props)=>{

    const cartcntx= useContext(CartContext)
    const addItemToCart=(event)=>{
        const quantity=  document.getElementById('amount_' +props.id).value
        event.preventDefault();
        cartcntx.addItem({...props.item, quantity: quantity});

        console.log( 'addItemToCart' , cartcntx)
    }
    return(
        <form className={classes.form}>
            {console.log('insiderender',cartcntx)}
            <Input label='Amount' input={{
                id: 'amount_' +props.id,
                type: 'number',
                min:'1',
                max:'5',
                step: '1',
                defaultValue: '1'
            }}/>
            <button onClick={addItemToCart}> +Add</button>
        </form>
    )
};

export default Form;

import Input from '../../UI/Input';
import { useRef, useContext } from 'react';
import CartContext from '../../../store/cart-context';
import classes from './MealItemForm.module.css'

function MealItemForm(props){ 
const cartCtx =  useContext(CartContext)
  
    const cartRef = useRef();
    const submitHandler = (e)=>{
        e.preventDefault();
       console.log(cartCtx)

    }

    return (
        <form className={classes.form} onSubmit={submitHandler}>
            <Input label="Amount" ref={cartRef} input={{
                id: 'amount',
                type: 'number',
                min : '1',
                max : '5',
                step : '1',
                defaultValue: '1'
            }} />
            <button>+ Add</button>
        </form>
    )
}
export default MealItemForm
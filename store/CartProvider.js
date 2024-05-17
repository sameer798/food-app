import { useReducer } from "react";
import CartContext from "./cart-context";


function cartReducer(state, action){
    switch(action.type){
        case "ADD" :
            return {
                ...state,
                items:state.items.concat(action.item)
            }
        case "REMOVE" : 
        return {
            ...state,
            items: state.items.filter(item => item.id !== action.id)
        }    
            default: return state
    }
    
}

function CartProvider(props) {

 const [cartState, dispatchCart] = useReducer(cartReducer, {
    items: [],
    totalAmount: 0
 })



  const addItemToCartHandler = (item) => {
    dispatchCart({
        type: "ADD",
        item: item
    })
    
  };

  const removeCartItemHandler = (id) => {
    dispatchCart({
        type: "REMOVE",
        id: id
    })
  };


  const cartContext = {
    items: cartState.items,
    addItem: addItemToCartHandler,
    removeItem: removeCartItemHandler,
    totalAmount: cartState.totalAmount,
  };
  return (
    <CartContext.Provider value={cartContext}>
      {props.children}
    </CartContext.Provider>
  );
}

export default CartProvider;

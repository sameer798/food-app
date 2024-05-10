import CartContext from "./cart-context"
function CartProvider(props){

   
    const addItemToCartHandler = (item)=>{
        
    }

    const removeCartItemHandler = (id)=>{
        
    }
    const cartContext = {
        items: [],
        addItem: addItemToCartHandler,
        removeItem: removeCartItemHandler,
        totalAmount: 0
    }
    return (
        <CartContext.Provider value={cartContext}>{props.children}</CartContext.Provider>
    )
}

export default CartProvider;
import Header from "./components/Layout/Header";
import Meals from "./components/Meals/Meals";
import Cart from "./components/Cart/Cart";
import React, { useState } from "react";
import CartProvider from "./store/cartProvider";




function App() {

  const [cartShow, setCartShow] = useState(false);
  
  const cartShowHandler = ()=>{
    setCartShow(true)
  }

  const cartHideHandler = ()=>{
    setCartShow(false);
  }
  return (
      <CartProvider>
      {cartShow && <Cart onClose = {cartHideHandler} />}
      <Header  onCartShow = {cartShowHandler}/>
      <main>
        <Meals />
      </main>
    </CartProvider>
  );
}


export default App;

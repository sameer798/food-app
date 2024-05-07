import Header from "./components/Layout/Header";
import Meals from "./components/Meals/Meals";
import Cart from "./components/Cart/Cart";
import React, {useState } from "react";

function App() {

  const [cartShow, setCartShow] = useState(false);
  const cartShowHandler = ()=>{
    setCartShow(true)
  }

  const cartHideHandler = ()=>{
    setCartShow(false);
  }
  return (
    <>
    {cartShow && <Cart onClose = {cartHideHandler} />}
      <Header  onCartShow = {cartShowHandler}/>
      <main>
        <Meals />
      </main>
    </>
  );
}

export default App;

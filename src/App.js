import Header from "./components/Layout/Header";
import './App.css'
import Meals from "./components/Meals/Meals";
import Cart from "./components/Cart/Cart";
import { useState } from "react";
import CartProvider from "./store/CartProvider";

function App() {
  const [showCart,setShowCart]=useState(false);

  const ShowCartHandler=()=>{
    setShowCart(true)
  }
  const HideCartHandler=()=>{
    setShowCart(false)
  }
  return (
    <CartProvider>
    <div className="app">
      {showCart && <Cart onClose={HideCartHandler}/>}
      <Header onOpen={ShowCartHandler}/>
      <main>
        <Meals/>
      </main>
    </div>
    </CartProvider>
  );
}

export default App;
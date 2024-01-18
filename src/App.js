import Header from "./components/Layout/Header";
import './App.css'
import Meals from "./components/Meals/Meals";
import Cart from "./components/Cart/Cart";
import { useState } from "react";

function App() {
  const [showCart,setShowCart]=useState(false);

  const ShowCartHandler=()=>{
    setShowCart(!showCart)
  }
  return (
    <div className="app">
      {showCart && <Cart onClose={ShowCartHandler}/>}
      <Header onOpen={ShowCartHandler}/>
      <main>
        <Meals/>
      </main>
    </div>
  );
}

export default App;
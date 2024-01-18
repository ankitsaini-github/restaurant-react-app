import Header from "./components/Layout/Header";
import './App.css'
import Meals from "./components/Meals/Meals";
import Cart from "./components/Cart/Cart";

function App() {
  return (
    <div className="app">
      <Cart/>
      <Header/>
      <main>
        <Meals/>
      </main>
    </div>
  );
}

export default App;
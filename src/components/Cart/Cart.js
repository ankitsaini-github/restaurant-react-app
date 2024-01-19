import Modal from "../UI/Modal";
import classes from "./Cart.module.css";
import CartContext from "../../store/Cart-context";
import { useContext } from "react";
import CartItem from "./CartItem";

function Cart(props) {
  const ctx = useContext(CartContext);
  const price = `$${ctx.totalAmount.toFixed(2)}`;
  const cartEmpty = ctx.items.length < 1;

  const cartItemRemoveHandler = (id) => {
    ctx.removeItem(id)
  };

  const cartItemAddHandler = (item) => {
    ctx.addItem({...item,amount:1})
  };

  const cartItems = (
    <ul className={classes["cart-items"]}>
      {ctx.items.map((item) => (
        <CartItem
          key={item.id}
          name={item.name}
          price={item.price}
          amount={item.amount}
          onRemove={cartItemRemoveHandler.bind(null,item.id)}
          onAdd={cartItemAddHandler.bind(null,item)}
        />
      ))}
    </ul>
  );

  return (
    <Modal onBackdropClick={props.onClose}>
      {cartEmpty && <p>Cart is Empty !!!</p>}
      {cartItems}
      <div className={classes.total}>
        <span>Total Amount</span>
        <span>{price}</span>
      </div>
      <div className={classes.actions}>
        <button className={classes["button--alt"]} onClick={props.onClose}>
          Close
        </button>
        {!cartEmpty && <button className={classes.button}>Order</button>}
      </div>
    </Modal>
  );
}

export default Cart;

import Modal from '../UI/Modal';
import classes from './Cart.module.css'
import CartContext from '../../store/Cart-context';
import { useContext } from 'react';

function Cart(props) {
  const ctx=useContext(CartContext);
  const price = `$${ctx.totalAmount.toFixed(2)}`;
    const cartItems = (
        <ul className={classes['cart-items']}>
          {ctx.items.map((item) => (
            <li key={`c_${item.id}`}>{item.name} - price: ${item.price} - qty: {item.amount}</li>
          ))}
        </ul>
      );
    
      return (
        <Modal onBackdropClick={props.onClose}>
          {cartItems}
          <div className={classes.total}>
            <span>Total Amount</span>
            <span>{price}</span>
          </div>
          <div className={classes.actions}>
            <button className={classes['button--alt']} onClick={props.onClose}>Close</button>
            <button className={classes.button}>Order</button>
          </div>
        </Modal>
      );
}

export default Cart
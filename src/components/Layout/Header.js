import React,{useContext} from "react";
import classes from "./Header.module.css";
import headerBanner from '../../assets/headerBanner.jpg';
import CartIcon from "../Cart/CartIcon";
import CartContext from "../../store/Cart-context";

function Header(props) {
  const ctx=useContext(CartContext);
  const totalCartItems=ctx.items.reduce((acc,item)=>{
    return acc+item.amount
  },0);
  return (
    <>
      <header className={classes.headerContainer}>
        <div className={classes.logo}>ReactMeals</div>
        <button className={classes.cartButton} onClick={props.onOpen}>
          <span className={classes.icon}><CartIcon/></span>
          <span>Your Cart</span>
          <span className={classes.badge}>{totalCartItems}</span>
        </button>
      </header>
      <div className={classes.headerBanner}>
        <img src={headerBanner} alt="meal logo"/>
      </div>
    </>
  );
}

export default Header;

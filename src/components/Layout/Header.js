import React, { useContext, useEffect, useState } from "react";
import classes from "./Header.module.css";
import headerBanner from "../../assets/headerBanner.jpg";
import CartIcon from "../Cart/CartIcon";
import CartContext from "../../store/Cart-context";

function Header(props) {
  const [btnIsHighlighted, setBtnIsHighlighted] = useState(false);
  const ctx = useContext(CartContext);
  const { items } = ctx;

  const totalCartItems = items.reduce((acc, item) => {
    return acc + item.amount;
  }, 0);
  const btnClass = `${classes.cartButton} ${
    btnIsHighlighted ? classes.bump : ""
  }`;

  useEffect(() => {
    if (items.length === 0) {
      return;
    }
    setBtnIsHighlighted(true);

    const timer = setTimeout(() => {
      setBtnIsHighlighted(false);
    }, 300);

    return () => {
      clearTimeout(timer);
    };
  }, [items]);

  return (
    <>
      <header className={classes.headerContainer}>
        <div className={classes.logo}>ReactMeals</div>
        <button className={btnClass} onClick={props.onOpen}>
          <span className={classes.icon}>
            <CartIcon />
          </span>
          <span>Your Cart</span>
          <span className={classes.badge}>{totalCartItems}</span>
        </button>
      </header>
      <div className={classes.headerBanner}>
        <img src={headerBanner} alt="meal logo" />
      </div>
    </>
  );
}

export default Header;

import React from "react";
import classes from "./Header.module.css";
import headerBanner from '../../assets/headerBanner.jpg';

function Header() {
  return (
    <>
      <header className={classes.headerContainer}>
        <div className={classes.logo}>ReactMeals</div>
        <button className={classes.cartValue}>
          <h6>Your Cart</h6>
          <div className={classes.CartCount}>0</div>
        </button>
      </header>
      <div className={classes.headerBanner}>
        <img src={headerBanner}/>
      </div>
    </>
  );
}

export default Header;

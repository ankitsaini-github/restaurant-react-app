import React from "react";
import classes from "./Header.module.css";
import headerBanner from '../../assets/headerBanner.jpg';
import CartIcon from "../Cart/CartIcon";

function Header(props) {
  return (
    <>
      <header className={classes.headerContainer}>
        <div className={classes.logo}>ReactMeals</div>
        <button className={classes.cartButton} onClick={props.onOpen}>
          <span className={classes.icon}><CartIcon/></span>
          <span>Your Cart</span>
          <span className={classes.badge}>0</span>
        </button>
      </header>
      <div className={classes.headerBanner}>
        <img src={headerBanner} alt="meal logo"/>
      </div>
    </>
  );
}

export default Header;

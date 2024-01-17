import React from 'react'
import classes from './Header.module.css'

function Header() {
  return (
    <div className={classes.headerContainer}>
        <div className={classes.logo}>ReactMeals</div>
        <div className={classes.cartValue}>
            <h6>Your Cart</h6>
            <div className={classes.CartCount}>0</div>
        </div>
    </div>
  )
}

export default Header
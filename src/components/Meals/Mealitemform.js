import { useRef } from "react";
import classes from "./Mealitemform.module.css";
import Input from "../UI/Input";

function Mealitemform(props) {
  const amountInputRef=useRef();
  const addMealToCart = (e) => {
    e.preventDefault();
    const enteredAmount=amountInputRef.current.value;
    const amountNumber=+enteredAmount

    if (
      enteredAmount.trim().length === 0 ||
      amountNumber < 1 ||
      amountNumber > 5
    ) {
      return;
    }
      props.onAddToCart(amountNumber);
  };
  return (
    <form className={classes.form} onSubmit={addMealToCart}>
      <Input
        ref={amountInputRef}
        label="Amount"
        input={{
          id: "amount_" + props.id,
          type: "number",
          min: "1",
          max: "5",
          step: "1",
          defaultValue: "1",
        }}
      />
      <button type="submit">+ Add</button>
    </form>
  );
}

export default Mealitemform;

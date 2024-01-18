import classes from "./AvailableMeals.module.css";
import Mealitemform from "./Mealitemform";
import CartContext from "../../store/Cart-context";
import { useContext } from "react";

const DUMMY_MEALS = [
  {
    id: "m1",
    name: "Sushi",
    description: "Finest fish and veggies",
    price: 22.99,
  },
  {
    id: "m2",
    name: "Schnitzel",
    description: "A german specialty!",
    price: 16.5,
  },
  {
    id: "m3",
    name: "Barbecue Burger",
    description: "American, raw, meaty",
    price: 12.99,
  },
  {
    id: "m4",
    name: "Green Bowl",
    description: "Healthy...and green...",
    price: 18.99,
  },
];

const MealItem = (props) => {
  const ctx = useContext(CartContext);
  const addMealHandler = (qty) => {
    ctx.addItem({
      id: props.id,
      name: props.name,
      amount: qty,
      price: props.price,
    });
  };
  return (
    <li key={props.id} className={classes.mealitem}>
      <div>
        <div className={classes.mealname}>{props.name}</div>
        <div className={classes.mealdescription}>{props.description}</div>
        <div className={classes.mealprice}>${props.price}</div>
      </div>
      <div>
        <Mealitemform id={props.id} onAddToCart={addMealHandler} />
      </div>
    </li>
  );
};

function AvailableMeal() {
 
  const mealsList = DUMMY_MEALS.map((meal) => (
    <MealItem
      key={meal.id}
      id={meal.id}
      name={meal.name}
      description={meal.description}
      price={meal.price}
    />
  ));

  return (
    <section className={classes.meals}>
      <ul>{mealsList}</ul>
    </section>
  );
}

export default AvailableMeal;

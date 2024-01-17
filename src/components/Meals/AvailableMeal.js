import classes from "./AvailableMeals.module.css";

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

function AvailableMeal() {
  const mealsList = DUMMY_MEALS.map((meal) => <li key={meal.id} className={classes.mealitem}>
      <div className={classes.mealname}>{meal.name}</div>
      <div className={classes.mealdescription}>{meal.description}</div>
      <div className={classes.mealprice}>${meal.price}</div>
    </li>);

  return (
    <section className={classes.meals}>
      <ul>{mealsList}</ul>
    </section>
  );
}

export default AvailableMeal;

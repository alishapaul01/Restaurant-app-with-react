import classes from './DummyMeals.module.css'
import Card from '../UI/Card';
import MealItem from'./MealItem/MealItem';
const Dummy_Meals=[{
    id: 'm1',
    name: 'Hazelnut Cholocalte Milkshake',
    description: 'A fully loaded Chocolate milkshake with hazelnut',
    price: 230,
  },
  {
    id: 'm2',
    name: 'Pesto Pasta',
    description: 'Extra Virgin Olive Oil, Spinach, Capsicum, Mushroom and Pesto Sauce',
    price: 530,
  },{
    id: 'm3',
    name: 'Pull Apart Garlic Bread',
    description: 'In-House Baked bread with our Signature Garlic Butter',
    price: 375,
  },{
    id: 'm4',
    name: 'Tradtitonal Margherita Pizza',
    description: 'Italian Tomato sauce, Mozzarella and Topped with fresh basil',
    price:  199,
  },
  {
    id: 'm4',
    name: 'Signature Peri-Peri Pizza',
    description: 'Italian Tomato sauce, Spinach, Mushrooms, Onion and Mozzarella Cheese and Topped with Peri-Peri Mayo',
    price:  199,
  },
  {
    id: 'm4',
    name: 'Strawberry Milkshake',
    description: 'Delicious thick cremay milkshake made with real strawberries',
    price:  230,
  },
]

const DummyMeals=()=>{
    const mealsList= Dummy_Meals.map((meal) => <MealItem id= {meal.id} key={meal.id} name={meal.name} description={meal.description} price= {meal.price}></MealItem>)
    return <section className={classes.meals}>
        <Card>
        <ul>{mealsList}</ul>
        </Card>
    </section>
}

export default DummyMeals;
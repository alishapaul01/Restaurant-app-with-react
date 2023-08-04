import classes from './DummyMeals.module.css'
import Card from '../UI/Card';
import MealItem from'./MealItem/MealItem';
const Dummy_Meals=[{
    id: 'm1',
    name: 'Sushi',
    description: 'Finest fish and veggies',
    price: 22.99,
  },
  {
    id: 'm2',
    name: 'Schnitzel',
    description: 'A german speciality!',
    price: 16.50,
  },{
    id: 'm3',
    name: 'Barbecue Burger',
    description: 'American, raw, meaty',
    price: 12.99,
  },{
    id: 'm4',
    name: 'Green Bowl',
    description: 'Healthy...and green...',
    price:  20.18,
  },
]

const DummyMeals=()=>{
    const mealsList= Dummy_Meals.map((meal) => <MealItem key={meal.id} name={meal.name} description={meal.description} price= {meal.price}></MealItem>)
    return <section className={classes.meals}>
        <Card>
        <ul>{mealsList}</ul>
        </Card>
    </section>
}

export default DummyMeals;
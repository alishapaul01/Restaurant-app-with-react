
import './App.css';
import Header from './Components/Layout/Header';
import DummyMeals from './Components/Meals/DummyMeals';
import Summary from './Components/Meals/Summary.js';
import Cart from './Components/Cart/Cart';
const App=()=>{
 return(
  <>
    <Cart/>
    <Header/>
    <Summary/>
    <DummyMeals/>
  </>
 )
}

export default App;

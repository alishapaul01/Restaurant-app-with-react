
import './App.css';
import Header from './Components/Layout/Header';
import DummyMeals from './Components/Meals/DummyMeals';
import Summary from './Components/Meals/Summary.js';
const App=()=>{
 return(
  <>
    <Header/>
    <Summary/>
    <DummyMeals/>
  </>
 )
}

export default App;

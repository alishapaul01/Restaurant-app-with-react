
import './App.css';
import { useState } from 'react';
import Header from './Components/Layout/Header';
import DummyMeals from './Components/Meals/DummyMeals';
import Summary from './Components/Meals/Summary.js';
import Cart from './Components/Cart/Cart';

const App=()=>{
  const[cartIsShown, setCartIsShown]= useState(false);
  const showCartHandler= ()=>{
    setCartIsShown(true);
  }
  const hideCartHandler=()=>{
    setCartIsShown(false);
  }
 return(
  <>
    {cartIsShown && <Cart onClose={hideCartHandler}/>}
    <Header onShowCart= {showCartHandler}/>
    <Summary/>
    <DummyMeals/>
  </>
 )
}

export default App;

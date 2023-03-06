
import './App.css';
import Navigation from './Navigation';
import Input from './Input';
import Products from './Products';
import { useState } from 'react';
import Cart from './Cart';
function App() {
  const [cart,setCart] = useState(false)
  const toggleCart = ()=>{
    setCart(pre=>!pre)
  }
  return (
    <>
      <Navigation onCart={toggleCart}/>
      <Input/>
      <h2>All Products :</h2>
      <Products/>
      {cart&&<Cart toggle={toggleCart}/>}
    </>
  );
}

export default App;

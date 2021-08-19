import {React, useState } from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import App from "./Home";
import Cart from "./Cart";
import About from "./About";
import Navbar from "./Navbar";
import Shop from "./Shop";
import '../assets/stylesheets/App.css';
import Product from './Product';
import data from "./data/data.json";
import { uniqid } from "uniqid"

const Routes = () => {
  const [cart, setCart] = useState([]);
  const [productList, setProductList] = useState(data);


  // ! addToCart = (arg, qnt) => if item.id exist => {setcart(cart[i].quantity = quantity + QNT)} || else => create item {setcart(cart.concat({id:arg.id, quantity: QNT, item: arg))}
  const addToCart = (arg, qnt) => {    
    const index = cart.findIndex(item => item.id === arg.id);
    if (index === -1) {
      setCart(     
        [
          ...cart, 
          {
            ...arg,
            quantity: qnt
            // ! QUANTITY: 
          }
        ]
      )
    } else {
      cart[index].quantity += qnt;
      setCart([...cart])
    }    
  }

  const resetCart = () => {
    setCart([]);
  }


 
  return (
    <BrowserRouter>
    <Navbar cart = {cart} />
      <Switch>   
                    
        <Route path="/cart" render={(props) => <Cart {...props} productList = {productList} cart = {cart} resetCart = {resetCart} /> } />
        <Route path="/about" component={About} />
        <Route path="/shop" render={(props) => <Shop {...props} productList = {productList} cart = {cart} addToCart = {addToCart} /> } />
  <Route path="/:product_id" render={(props) => <Product {...props} productList = {productList} cart = {cart} addToCart = {addToCart} /> } /> 
        <Route exact path="/" component={App} /> 
        
      </Switch>
    </BrowserRouter>
  );
};

export default Routes;
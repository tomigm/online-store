import React from "react";
import { Link } from "react-router-dom";

const Navbar = (props) => {

    /* //! PARA CONTAR LOS ITEMS DEL CARRITO
    var accounts = [
  { name: 'James Brown', msgCount: 123 },
  { name: 'Stevie Wonder', msgCount: 22 },
  { name: 'Sly Stone', msgCount: 16 },
  { name: 'Otis Redding', msgCount: 300 }  // Otis has the most messages
];

// get sum of msgCount prop across all objects in array

console.log('Total Messages:', cartTotal); // Total Messages: 461
    */


   const cartTotal = props.cart.reduce(function(prev, cur) {return prev + cur.quantity; }, 0)
  
  

return (
    <nav className="navbar navbar-expand-lg navbar-light d-flex justify-content-between sticky-top bg-white">
        <Link to="/" className="navbar-brand" >Stuffr</Link>
        
        <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav">
                <li className="nav-item active">
                   <Link to="/shop" className="nav-link text-center">Shop</Link>
                </li>
                <li className="nav-item">
                   <Link to="/about" className="nav-link text-center">About</Link>
                </li>      
            </ul>

        </div>
 
         
        <Link to="/cart"className="nav-link">
            <span><svg width="1.5em" height="1.5em" viewBox="0 0 16 16" id="cart" className="bi bi-cart2" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                <path fillRule="evenodd" d="M0 2.5A.5.5 0 0 1 .5 2H2a.5.5 0 0 1 .485.379L2.89 4H14.5a.5.5 0 0 1 .485.621l-1.5 6A.5.5 0 0 1 13 11H4a.5.5 0 0 1-.485-.379L1.61 3H.5a.5.5 0 0 1-.5-.5zM3.14 5l1.25 5h8.22l1.25-5H3.14zM5 13a1 1 0 1 0 0 2 1 1 0 0 0 0-2zm-2 1a2 2 0 1 1 4 0 2 2 0 0 1-4 0zm9-1a1 1 0 1 0 0 2 1 1 0 0 0 0-2zm-2 1a2 2 0 1 1 4 0 2 2 0 0 1-4 0z"/>
            </svg></span> <span id="cart-label">{cartTotal}</span>
        </Link>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
        </button>
    </nav>
);

}

export default Navbar;

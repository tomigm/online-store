// https://unsplash.com/collections/10561100/fondos-lisos

import { React, useState, useEffect } from "react";
import data from "./data/data.json"
import { Link } from "react-router-dom"


const Shop = (props) => {
   
    const [productList, setProductList] = useState(props.productList);
    console.log('PRODUCTS viene de router')
    console.log(props, props.productList);


    const cardData = productList.map( item => {
        return (
            <div className="col mb-5 ">
                <div className="card shop_card" key={item.id}>
                    <img src={item.picture} className="card-img-top shop_card-picture" alt={item.name} />
                    <div className="card-body">
                        <h5 className="card-title align-middle">{item.name} <span class="badge badge-pill badge-warning">${item.price}</span></h5>
                        <p class="card-text">{item.description.substring(0,30)}... </p>
                        <Link to={'/' + item.id } class="btn btn-primary w-100 mb-2" addToCart = {props.addToCart}>VIEW PRODUCT</Link>
                        <a href="#0" class="btn btn-secondary w-100" onClick={() => props.addToCart(item, 1)}>ADD TO CART</a>
                    </div>
                </div>
            </div>
        )
    })

    

return (
    <div className="shop_container container-fluid p-5">  
        <div className="mb-5">
            <h1>Things you can appreciate!</h1>
            <h2>Ok... maybe not, but we do</h2>
        </div>    
        
        <div className="row row-cols-1 row-cols-md-2 row-cols-xl-5">
            {cardData}
        </div>
    </div>
);

}

export default Shop;

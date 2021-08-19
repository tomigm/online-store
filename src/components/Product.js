import {React, useState, useEffect} from "react";
import data from "./data/data.json"
import inputSpinner from 'bootstrap-input-spinner'

const Product = (props) => {

const [product, setProduct] = useState(null);

useEffect(() => {
    console.log(props);
    let id = props.match.params.product_id;
    const currentProd = data.find(item => item.id == id);
    console.log(currentProd)
    setProduct(currentProd);
} );

const addQuantity = (product) => {
    let qInput = document.getElementById('qInput').value;
 
    if (qInput === ""){
        props.addToCart(product, 1)
    } else {
    props.addToCart(product, parseInt(qInput))
    }
        
        
    
}

const renderProduct = 
    product ? (
    <div className="text-justify product-content d-flex justify-content-around align-items-center">
        
        <img src={product.picture} alt=""/>
        <div className="pl-5  pc_data">
            <h1>{product.name}</h1>
            <h2>{product.description}</h2>
            
            <div className="d-flex justify-content-between fila_precios">
            <h2> <span class="badge badge-pill badge-warning">${product.price}</span></h2>
            <div>
                <input type="number" id="qInput" name="quantity" min="1" max="50" step="1" placeholder="qnty" />
                <a href="#0" class="btn btn-secondary" onClick={() => addQuantity(product)}>ADD TO CART</a>
            </div>
            </div>
            

        </div>
    </div>    

) : (
    <div>Loading...</div>

)


return (
    <div className="product_container container-fluid d-flex justify-content-center p-2 ">  
       
       {renderProduct}
       
    </div>
);

}

export default Product;

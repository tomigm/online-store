import {React, useState} from "react";


const Cart = (props) => {

    const [alert, setAlert] = useState ('none')
    const renderTable = props.cart.map(item => {
        return (
        <tr key={item.id}>
        <td><img src={item.picture} alt={item.name} className="img-fluid"/></td>
        <td className="align-middle">{item.name}</td>
        <td className="align-middle">{item.quantity}</td>
        <th scope="row" className="align-middle">${item.price}</th>
        <th scope="row" className="align-middle row_totals text-center" >${item.price * item.quantity}</th>
        
        </tr>
        )
    })


    const cartTotal = props.cart.reduce(function(prev, cur) {return prev + (cur.price * cur.quantity); }, 0)
  
    const purchaseCart = () =>{

        if (alert === 'block') {return}

        setAlert('block')

        setTimeout(() => {
            setAlert('none')
         }, 5000)

        props.resetCart()
    }
    return (
        <div className="cart_container container-fluid pt-5">
        <div id="purchase_alert" div class="alert alert-success text-center" role="alert" style={{display: alert}}>
            Thank you for your purchase!            
        </div>  
        <div className="mb-5">
            <h1>Time to pay!</h1>
            <h2>Check your stuff</h2>
        </div>    
        
        <div className="">
           
            <table class="table table-striped">
                <thead>
                    <tr>                
                        <th scope="col">Picture</th>
                        <th scope="col">Product</th>
                        <th scope="col">Quantity</th>
                        <th scope="col">Price</th>
                        <th scope="col" className="text-center">Totals</th>
                    </tr>
                </thead>
                <tbody>
                    {renderTable}
                    <tr className=" table-warning">
                        <th scope="row" className="align-middle" colspan="4">TOTAL</th>  
                        <th scope="row" className="align-middle text-center">${cartTotal}</th>  
                    </tr>
                    <tr className="checkout_row">
                        <th colspan="4"></th>
                        <th className="text-center" onClick={() => purchaseCart() }><h2>CHECKOUT →</h2></th>
                    </tr>
                </tbody>
            </table>

            

        </div>
        
    </div>
    );
};

export default Cart;

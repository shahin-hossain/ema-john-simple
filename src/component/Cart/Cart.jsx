import React from 'react';
import './Cart.css'
const Cart = ({ cart }) => { //Option 3: destructuing দিয়ে props কে সরাসরি Receive করা হয়েছে।
    // const cart = props.cart; //Option 1
    // const { cart } = props; //option 2

    // console.log(cart)
    let total = 0;
    let totalShipping = 0;

    for (const product of cart) {
        total = total + product.price;
        totalShipping = totalShipping + product.shipping;
    } // bought product price & Shiping cost calculation

    const tax = total * 7 / 100; //tax Calculation 

    const grandTotal = total + totalShipping + tax;

    return (
        <div className='cart'>
            <h4>Order Summery</h4>
            <h3>Selected Items: {cart.length}</h3>
            <p>Total Price: ${total} </p>
            <p>Total Shipping: ${totalShipping} </p>
            <p>Tax: ${tax.toFixed(2)} </p>
            <h6>Grand Total: ${grandTotal.toFixed(2)} </h6>
        </div>
    );
};

export default Cart;
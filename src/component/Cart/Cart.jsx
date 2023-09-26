import React from 'react';
import './Cart.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrashCan } from '@fortawesome/free-solid-svg-icons'
const Cart = ({ cart, handleClearCart, children }) => { //Option 3: destructuing দিয়ে props কে সরাসরি Receive করা হয়েছে।
    // const cart = props.cart; //Option 1
    // const { cart } = props; //option 2
    //children props হলো Special props যেটি orders, shops থেকে পাঠানো হয়েছে।
    // console.log(cart)
    let total = 0;
    let totalShipping = 0;
    let quantity = 0;

    for (const product of cart) {
        /* if (product.quantity === 0) {
            product.quantity = 1
        } */
        // product.quantity = product.quantity || 1;
        total = total + product.price * product.quantity; //যদি একটা product কয়েকবার add করে তাই প্রতিটা product এর quantity গুন করা হয়েছে।
        totalShipping = totalShipping + product.shipping; // যদি প্রতিটা product এর জন্য shipping cost রাখা হয় তাহলে এখানেও quantity গুন করতে হবে।
        quantity = quantity + product.quantity;
    } // bought product price & Shiping cost calculation

    const tax = total * 7 / 100; //tax Calculation 

    const grandTotal = total + totalShipping + tax;

    return (
        <div className='cart'>
            <h4>Order Summery</h4>
            <h3>Selected Items: {quantity}</h3>
            <p>Total Price: ${total} </p>
            <p>Total Shipping: ${totalShipping} </p>
            <p>Tax: ${tax.toFixed(2)} </p>
            <h6>Grand Total: ${grandTotal.toFixed(2)} </h6>
            <button onClick={handleClearCart} className='btn-clear-cart'>
                <span>Clear Cart</span>
                <FontAwesomeIcon icon={faTrashCan} />
            </button>
            {children}
        </div>
    );
};

export default Cart;
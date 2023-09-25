import React from 'react';
import Cart from '../Cart/Cart';
import { useLoaderData } from 'react-router-dom';

const Orders = () => {
    const cart = useLoaderData();
    console.log(cart)
    return (
        <div className='shop-container'>
            <div className='product-container'>
                <h1>Orders Page {cart.length}</h1>
            </div>
            <div>
                <Cart cart={cart}></Cart>  {/* এখানে Cart কে নেয়া হয়েছে, এখানে যদি কোনো ভ্যালু না দেয়া হয় তাহলে not iterable Error দিয়ে যা কোনো array এর লুপ কে বুঝায় কারণ Cart এর মধ্যে array কে লুপ করা হচ্ছে।*/}
            </div>

        </div>
    );
};

export default Orders;
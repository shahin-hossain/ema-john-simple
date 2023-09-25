import React from 'react';
import Cart from '../Cart/Cart';
import { useLoaderData } from 'react-router-dom';
import ReviewItem from '../ReviewItem/ReviewItem';
import './Orders.css'
const Orders = () => {
    const cart = useLoaderData();
    return (
        <div className='shop-container'>
            <div className='review-container'>
                {cart.map(product => <ReviewItem
                    key={product.id}
                    product={product}
                ></ReviewItem>)}
            </div>
            <div>
                <Cart cart={cart}></Cart>  {/* এখানে Cart কে নেয়া হয়েছে, এখানে যদি কোনো ভ্যালু না দেয়া হয় তাহলে not iterable Error দিয়ে যা কোনো array এর লুপ কে বুঝায় কারণ Cart এর মধ্যে array কে লুপ করা হচ্ছে।*/}
            </div>

        </div>
    );
};

export default Orders;
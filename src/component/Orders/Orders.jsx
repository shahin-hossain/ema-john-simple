import React, { useState } from 'react';
import Cart from '../Cart/Cart';
import { Link, useLoaderData } from 'react-router-dom';
import ReviewItem from '../ReviewItem/ReviewItem';
import './Orders.css'
import { deleteShoppingCart, removeFromDb } from '../../utilities/fakedb';
const Orders = () => {
    const savedCart = useLoaderData();
    // কোনো cart item কে cart list থেকে delete করতে চাইলে নতুন করে state set করে data পাঠাতে হবে।
    const [cart, setCart] = useState(savedCart) //saveCart এখন শুধু initial State এ ব্যবহার করা হবে।
    // console.log(savedCart)
    const handleRemoveFromId = (id) => {
        const remaining = cart.filter(product => product.id !== id); //filter করা হয়েছে, যে id টা click handler এর সাথে মিলবে সেটা বাদে বাকি product গুলো নিবে।
        setCart(remaining); //বাকি গুলোকে state এ সেট করে দেয়া হয়েছে।
        removeFromDb(id) // local Storage থেকেও id Remove করা হয়েছে।
    }

    //orders এর page থেকে  cart clear করা জন্য handleClearCart function পাঠানো হচ্ছে, shop থেকেও cart কে করতে হবে।
    const handleClearCart = () => {
        setCart([]);
        deleteShoppingCart()
    }
    return (
        <div className='shop-container'>
            <div className='review-container'>
                {cart.map(product => <ReviewItem
                    key={product.id}
                    product={product}
                    handleRemoveFromId={handleRemoveFromId} // function কে props করে পাঠানো হয়েছে।
                ></ReviewItem>)}
            </div>
            <div>
                <Cart
                    cart={cart}
                    handleClearCart={handleClearCart}
                >
                    <Link to='/checkout'>
                        <button className='btn-proceed'>Proceed Checkout</button>
                    </Link> {/* order page থেকে children পাঠানো হয়েছে, user যখন order page থাকবে তখন এই order page এর element show করবে।*/}
                </Cart>  {/* এখানে Cart কে নেয়া হয়েছে, এখানে যদি কোনো ভ্যালু না দেয়া হয় তাহলে not iterable Error দিয়ে যা কোনো array এর লুপ কে বুঝায় কারণ Cart এর মধ্যে array কে লুপ করা হচ্ছে।*/}
            </div>

        </div>
    );
};

export default Orders;
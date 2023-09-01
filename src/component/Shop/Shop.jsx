import React, { useEffect, useState } from 'react';

import './Shop.css'
import Product from '../Product/Product';
import Cart from '../Cart/Cart';
import { addToDb, getShoppingCart } from '../../utilities/fakedb';
const Shop = () => {
    // useState & useEffect for load data
    const [products, setProducts] = useState([]);
    const [cart, setCart] = useState([]) // এখানে cart গুলো রাখা হবে। array.push দিয়ে state কিছু সেট করা যায় না করণ এটা immiutable.
    // console.log(cart)
    useEffect(() => {
        fetch('products.json')
            .then(res => res.json())
            .then(data => setProducts(data))
    }, [])

    useState(() => {
        const storedCart = getShoppingCart(); // এখানে side effect টা ব্যবহার করা হয়েছে Local Storage এর Stored id Value নিয়ে আশার জন্য। এবং এই ID ধরে product টাকে বের করে নিয়ে আসবো।
        console.log(storedCart)
    }, [])
    //Add to cart event Handler 
    const handleAddToCart = (product) => {
        const newCart = [...cart, product] // এখানে cart array এর উপাদান গুলো বসিয়ে, তারপর product কে সেট করা হয়েছে।
        setCart(newCart);

        addToDb(product.id) // addToDb function এর মধ্যে product এর id কে পাঠানো হয়েছে, local Storage এ সেট করার জন্য।
    }
    return (
        <div className='shop-container'>
            {/* product container */}
            <div className="product-container">
                {products.map(product => <Product
                    key={product.id}
                    product={product}
                    handleAddToCart={handleAddToCart}//এখানে function কে পাঠানো হয়েছে। props হিসাবে।
                ></Product>)}
            </div>
            {/* cart container start */}
            <div className="cart-container">
                <Cart cart={cart}></Cart>
            </div>
        </div>
    );
};

export default Shop;

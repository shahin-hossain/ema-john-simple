import React, { useEffect, useState } from 'react';

import './Shop.css'
import Product from '../Product/Product';
const Shop = () => {
    // useState & useEffect for load data
    const [products, setProducts] = useState([]);
    const [cart, setCart] = useState([]) // এখানে cart গুলো রাখা হবে। array.push দিয়ে state কিছু সেট করা যায় না করণ এটা immiutable.
    console.log(cart)
    useEffect(() => {
        fetch('products.json')
            .then(res => res.json())
            .then(data => setProducts(data))
    }, [])

    //Add to cart event Handler 
    const handleAddToCart = (product) => {
        const newCart = [...cart, product]
        setCart(newCart);
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
                <h4>Order Summery</h4>
                <h3>Selected Cart: {cart.length}</h3>
            </div>
        </div>
    );
};

export default Shop;
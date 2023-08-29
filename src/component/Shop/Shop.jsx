import React, { useEffect, useState } from 'react';

import './Shop.css'
import Product from '../Product/Product';
const Shop = () => {
    // useState & useEffect for load data
    const [products, setProducts] = useState([]);
    useEffect(() => {
        fetch('products.json')
            .then(res => res.json())
            .then(data => setProducts(data))
    }, [])

    const handleAddToCart = (product) => {
        console.log(product)
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
            </div>
        </div>
    );
};

export default Shop;
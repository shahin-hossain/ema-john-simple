import React, { useEffect, useState } from 'react';

import './Shop.css'
const Shop = () => {
    const [products, setProducts] = useState([]);
    useEffect(() => {
        fetch('products.json')
            .then(res => res.json())
            .then(data => setProducts(data))
    }, [])
    return (
        <div className='shop-container'>
            {/* product container */}
            <div className="product-container">
                <h2>product Coming Here {products.length}</h2>
            </div>
            {/* cart container start */}
            <div className="cart-container">
                <h4>Order Summery</h4>
            </div>
            {products.map(product => console.log(product))}
        </div>
    );
};

export default Shop;
import React from 'react';
import './Product.css'
const Product = (props) => {
    const { name, price, img, id, seller, ratings } = props.product;

    return (
        <div className='product' >
            <img src={img} alt="No Image" />
            <div className='product-info'>
                <h6 className='product-name'>{name}</h6>
                <p>Price: ${price}</p>
                <p>Manufacturer: {seller}</p>
                <p>Ratings: {ratings} Star</p>
            </div>

            <button className='btn-cart'>Add to Cart</button>

        </div>
    );
};
import './Product.css'
export default Product;
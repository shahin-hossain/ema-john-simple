import React from 'react';
import './Product.css'
const Product = (props) => {
    const { name, price, img, id, seller, quantity } = props.product;

    return (
        <div className='product' >
            <img src={img} alt="No Image" />
            <h3>{name}</h3>
        </div>
    );
};
import './Product.css'
export default Product;
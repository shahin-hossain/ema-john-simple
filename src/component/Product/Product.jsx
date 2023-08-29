import React from 'react';
import './Product.css'
const Product = (props) => {
    const { name, price, img, seller, id, ratings } = props.product;

    const handleAddToCart = props.handleAddToCart; // function props সে একটি variable এ নিয়ে button এ add করা হয়েছে।
    return (
        <div className='product' >
            <img src={img} alt="No Image" />
            <div className='product-info'>
                <h6 className='product-name'>{name}</h6>
                <p>Price: ${price}</p>
                <p>Manufacturer: {seller}</p>
                <p>Ratings: {ratings} Star</p>
            </div>
            <button className='btn-cart' onClick={() => handleAddToCart(props.product)}>Add to Cart</button> {/*এখানে function কে props হিসাবে পাঠানো হয়েছে। ‍*/}

        </div>
    );
};
import './Product.css'
export default Product;
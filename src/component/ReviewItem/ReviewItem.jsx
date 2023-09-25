import React from 'react';
import './ReviewItem.css'
const ReviewItem = ({ product }) => {
    const { id, img, name, price, quantity } = product
    return (
        <div className='review-item'>
            <img src={img} alt="productImg" />

        </div>
    );
};

export default ReviewItem;
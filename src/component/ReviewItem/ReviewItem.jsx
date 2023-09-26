import React from 'react';
import './ReviewItem.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrashCan } from '@fortawesome/free-solid-svg-icons';
const ReviewItem = ({ product }) => {
    const { id, img, name, price, quantity } = product
    return (
        <div className='review-item'>
            <img src={img} alt="productImg" />
            <div className='review-details'>
                <p className='product-title'>{name}</p>
                <p>Price: <span className='orange-text'>${price}</span></p>
                <p>Quantity: <span className='orange-text'>{quantity}</span></p>
            </div>
            <button className='btn-delete'>
                <FontAwesomeIcon icon={faTrashCan} className='delete-icon' />
            </button>
        </div>
    );
};

export default ReviewItem;
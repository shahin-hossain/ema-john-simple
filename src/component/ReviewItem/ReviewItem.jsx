import React from 'react';
import './ReviewItem.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrashCan } from '@fortawesome/free-solid-svg-icons';
const ReviewItem = ({ product, handleRemoveFromId }) => {
    const { id, img, name, price, quantity } = product
    return (
        <div className='review-item'>
            <img src={img} alt="productImg" />
            <div className='review-details'>
                <p className='product-title'>{name}</p>
                <p>Price: <span className='orange-text'>${price}</span></p>
                <p>Quantity: <span className='orange-text'>{quantity}</span></p>
            </div>
            <button onClick={() => handleRemoveFromId(id)} className='btn-delete' > {/*button এ ক্লিক করলে, item Remove করতে চাইলে এখানে শুধু call করে id টাকে পাঠাতে হবে। যেখান থেকে propos আসছে*/}
                <FontAwesomeIcon icon={faTrashCan} className='delete-icon' />
            </button>
        </div>
    );
};

export default ReviewItem;
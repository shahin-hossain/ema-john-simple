import React, { useEffect, useState } from 'react';

import './Shop.css'
import Product from '../Product/Product';
import Cart from '../Cart/Cart';
import { addToDb, deleteShoppingCart, getShoppingCart } from '../../utilities/fakedb';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';
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

    useEffect(() => {
        // console.log('products', products)
        //get stored Cart
        const storedCart = getShoppingCart(); // এখানে side effect টা ব্যবহার করা হয়েছে Local Storage এর Stored id Value নিয়ে আশার জন্য। এবং এই ID ধরে product টাকে বের করে নিয়ে আসবো।
        const savedCart = []; //এই savedCart এর মধ্যে রাখা হবে local Storage থেকে id দিয়ে প্রাপ্ত products

        //Stored data থেকে data নিয়ে আসার জন্য ৫টা স্টেপ করেছি।
        //setp 1: get id of the stored cart
        for (const id in storedCart) {
            // console.log(id)
            //setp: 2 Find the Product by using id
            const addedProduct = products.find(product => product.id === id)

            if (addedProduct) {
                //step 3: add Quantity 
                const quantity = storedCart[id];
                addedProduct.quantity = quantity;
                //step 4: add the added product to save Cart
                savedCart.push(addedProduct)
            }
        }
        //setp 5: set the cart
        setCart(savedCart)
        // console.log(addedProduct)


    }, [products]) //এখানে useEffect এর Dependency set করে দেওয়া হয়েছে। যেহেতু fetch করে data নিয়ে আসতে সময় লাগে,  এর মধ্যে  এই useEffect কল হয়ে যায়। তাহলে empty array আসবে। dependency set করে বলা হল যে, যদি products array এর মান পরিবর্তন হয়ে তাহলে আবার কল করবে।

    //Add to cart event Handler 
    const handleAddToCart = (product) => {
        // const newCart = [...cart, product] // এখানে cart array এর উপাদান গুলো বসিয়ে, তারপর product কে সেট করা হয়েছে।

        //if product does not exist in the cart then set quantity = 1;
        //if product exist update quantity by 1
        let newCart = [];

        const exists = cart.find(pd => pd.id === product.id);

        if (!exists) {
            product.quantity = 1;
            newCart = [...cart, product]
        }
        else {
            exists.quantity = exists.quantity + 1; // exists এর quantity কে আপডেট করা হয়েছে।
            const remaining = cart.filter(pd => pd.id !== product.id) //যে id টা মিলে গেছে সেটা বাদে বাকি গুলো Remaining এ রাখা হয়েছে।
            newCart = [...remaining, product] //বাকি গুলোকে cart এর মধ্যে set করে দেয়া হয়েছে।
        }

        setCart(newCart);
        addToDb(product.id) // addToDb function এর মধ্যে product এর id কে পাঠানো হয়েছে, local Storage এ সেট করার জন্য।
    }

    //shop থেকেও clear cart handler কে পাঠাতে হবে। নইলে এখনে থেকে যে props যাবে, handler কে পাবে না, তাতে করে shop page এ clear করবে না। 
    const handleClearCart = () => {
        setCart([])
        deleteShoppingCart()
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
                <Cart
                    cart={cart}
                    handleClearCart={handleClearCart}
                >
                    <Link to='/orders'>
                        <button className='btn-proceed'>
                            <span>Order Review</span>
                            <FontAwesomeIcon icon={faArrowRight} />
                        </button>
                    </Link>  {/* shop page থেকে children props পাঠানো হয়েছে, user যখন shop page থাকবে তখন এই shop page এর element show করবে।*/}
                </Cart>
            </div>
        </div>
    );
};

export default Shop;

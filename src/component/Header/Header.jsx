import React from 'react';
import './Header.css'
import Logo from '../../images/Logo.svg'
const Header = () => {
    return (
        <div className='header'>
            <img src={Logo}></img>
            <nav>
                <a href="/shop" >Shop</a>
                <a href="/order" >Order</a>
                <a href="/inventory">Inventory</a>
                <a href="/login">login</a>
            </nav>
        </div>
    );
};

export default Header;
import React, { useContext } from 'react';
import './Header.css'
import Logo from '../../images/Logo.svg'
import { Link } from 'react-router-dom';
import { AuthContext } from '../providers/authProvider';
const Header = () => {

    const { user } = useContext(AuthContext);
    return (
        <div className='header'>
            {/* header logo */}
            <img src={Logo}></img>
            {/* nav start */}
            <nav>
                <Link to="/" >Shop</Link>
                <Link to="/orders" >Order</Link>
                <Link to="/inventory">Inventory</Link>
                <Link to="/login">login</Link>
                <Link to="/signup">Sign Up</Link>
                {user && <span>Welcome</span>}
            </nav>
        </div>
    );
};

export default Header;
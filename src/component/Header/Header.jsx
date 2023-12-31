import React, { useContext } from 'react';
import './Header.css'
import Logo from '../../images/Logo.svg'
import { Link } from 'react-router-dom';
import { AuthContext } from '../providers/authProvider';

const Header = () => {

    const { user, logOut } = useContext(AuthContext);

    //logOut
    const handleSignOut = () => {
        logOut()
            .then(() => {
                console.log('logged Out')
            })
            .catch(error => console.error(error))
    }
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
                {user && <span className='text-white'>Welcome {user.email} <button onClick={handleSignOut}>Log Out</button></span>}
            </nav>
        </div>
    );
};

export default Header;
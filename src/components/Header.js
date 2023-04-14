import React from 'react';
import logo from '../assets/BookNook-flower-logo.png';
import { Link, NavLink } from 'react-router-dom';

function Header() {
    return (  
        <div className='navbar'>
             <div className='logo'>
                 <img src={logo} alt='logo'></img>
             </div>
             <ul className='nav-links'>
                <Link to='/' relative='path'>My Library</Link>
                <Link to='/add'>Add Book</Link>
             </ul>
        </div>
    );
}

export default Header;
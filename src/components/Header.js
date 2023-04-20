import React from 'react';
import logo from '../assets/BookNook-logo-plain-horizontal.png';
import { Link } from 'react-router-dom';

function Header() {
    return (  
        <div className='navbar'>
             <div className='logo'>
                 <img id="horizontal-logo" src={logo} alt='logo'></img>
             </div>
             <ul className='nav-links'>
                <Link to='/' relative='path'>My Library</Link>
                <Link to='/add'>Add Book</Link>
                <Link to='/statistics'>Library Info</Link>
             </ul>
        </div>
    );
}

export default Header;
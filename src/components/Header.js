import React from 'react';
import logo from '../assets/BookNook-logo-plain-horizontal-cream.png';
import { Link } from 'react-router-dom';
import { LinkContainer } from 'react-router-bootstrap';
import { Navbar, NavDropdown, NavbarBrand, Nav } from 'react-bootstrap';

function Header() {
    return (  
        // <div className='navbar'>
        //      <div className='logo'>
        //          <img id="horizontal-logo" src={logo} alt='logo'></img>
        //      </div>
        //      <ul className='nav-links'>
        //         <Link to='/' relative='path'>My Library</Link>
        //         <Link to='/add'>Add Book</Link>
        //         <Link to='/statistics'>Library Info</Link>
        //      </ul>
        // </div>
        <Navbar collapseOnSelect expand="lg" variant="dark">
            <LinkContainer to='/' relative='path'>
                <NavbarBrand>
                    <img
                        src={logo}
                        alt='BookNook logo'></img>
                </NavbarBrand>
            </LinkContainer>
            <Navbar.Toggle aria-controls="basic-navbar-nav" className='toggler' />
            <Navbar.Collapse id="basic-navbar-nav">
            <Nav className='mr-auto nav-link'>
                    <LinkContainer to='/'>
                        <Nav.Link>My Library</Nav.Link>
                    </LinkContainer>
                </Nav>
                <Nav className='mr-auto nav-link'>
                    <LinkContainer to='/add'>
                        <Nav.Link>Add Book</Nav.Link>
                    </LinkContainer>
                </Nav>
                <Nav className='mr-auto nav-link'>
                    <LinkContainer to='/statistics'>
                        <Nav.Link>More Details</Nav.Link>
                    </LinkContainer>
                </Nav>
                <NavDropdown title='Account' id='basic-nav-dropdown' variant='dark'>
                    <LinkContainer to='/logout'>
                        <NavDropdown.Item>Sign Out</NavDropdown.Item>
                    </LinkContainer>
                    <LinkContainer to='*'>
                        <NavDropdown.Item>Settings</NavDropdown.Item>
                    </LinkContainer>
                    <NavDropdown.Divider />
                    <LinkContainer to='/login'>
                        <NavDropdown.Item>Sign In</NavDropdown.Item>
                    </LinkContainer>
                </NavDropdown>
                </Navbar.Collapse>
        </Navbar>

    );
}

export default Header;
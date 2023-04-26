import React from 'react';
import logo from '../assets/BookNook-logo-plain-horizontal-cream.png';
import { Link } from 'react-router-dom';
import { LinkContainer } from 'react-router-bootstrap';
import { Navbar, NavDropdown, NavbarBrand, Nav } from 'react-bootstrap';

function Header() {
    return (  
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
                <NavDropdown title='Account' id='basic-nav-dropdown' className='nav-link' menuVariant='light'>
                    <LinkContainer to='/logout'>
                        <NavDropdown.Item href='#action/3.1'>Sign Out</NavDropdown.Item>
                    </LinkContainer>
                    <LinkContainer to='*'>
                        <NavDropdown.Item href='#action/3.2' disabled>Settings</NavDropdown.Item>
                    </LinkContainer>
                    <NavDropdown.Divider />
                    <LinkContainer to='/login'>
                        <NavDropdown.Item href='#action/3.3'>Sign In</NavDropdown.Item>
                    </LinkContainer>
                </NavDropdown>
                </Navbar.Collapse>
        </Navbar>

    );
}

export default Header;
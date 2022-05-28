import React from 'react';
import { Link } from 'react-router-dom'
import { Container, Navbar, Nav, NavDropdown, Row, Col, Form, FormControl, Button } from 'react-bootstrap';


let path = process.env.PUBLIC_URL;
let searchImage = "/images/search.svg";
let cartImage = "/images/cart.svg";
let logoimage = "/images/logo.svg"
let heartimage = "/images/heart.svg";



const Header = () => {
  return (
   <>
    <header id="primary__header">
      <Navbar expand="lg">
        <Container fluid>
          <Link className='navbar-brand' to="/"><img src={path + logoimage } alt="logo" /></Link>
          <div className='header__main'>
            <div className='header__left'>
            <Navbar.Toggle aria-controls="navbarScroll" />
          <Navbar.Collapse id="navbarScroll">
            <Nav
              className="me-auto primary__menu"

            >
              <Link to="/" className='nav-link'>Home</Link>
              <Link to="/shop" className='nav-link'>Shop</Link>
              <NavDropdown title="Categories" id="collasible-nav-dropdown">
                <Link to={'product-cat'} className='dropdown-item'>Eye frames</Link>
                <Link to={'product-cat'} className='dropdown-item'>Eye frames</Link>
                <Link to={'product-cat'} className='dropdown-item'>Eye frames</Link>
                <Link to={'product-cat'} className='dropdown-item'>Eye frames</Link>
            </NavDropdown>
            <Link to="/about-us" className='nav-link'>About Us</Link>
            <Link to="/contact-us" className='nav-link'>Contac Us</Link>
            <Link to="/sign-in" className='nav-link desktop-none'> Sign In</Link>
            <Link to="/" className='nav-link desktop-none'> VISUAL TRY ON!</Link>
            </Nav>
          </Navbar.Collapse>
            </div>
            <div className='header__right'>
                <ul className="header__info d-flex list-unstyled">
                  <li className='mx-2 header__info__list'><Link to="/"> <img src={path + searchImage } alt="search" /></Link></li>
                  <li className='header__info__list'><Link to="/cart"> <span className='cart__count'>3</span> <img src={path + cartImage } alt="cart" /></Link></li>
                  <li className='mx-2 header__info__list'><Link to="/"> <img src={path + heartimage } alt="search" /></Link></li>
                  <li className='ms-1 me-2 mobile-none'><Link to="/sign-in" className='btn button button-outline rounded-0'> Sign In</Link></li>
                  <li><Link to="/" className='btn button rounded-0 mobile-none'> VISUAL TRY ON!</Link></li>
                </ul>
            </div>
          </div>
        </Container>
      </Navbar>
    </header>
    </>
  )
}

export default Header
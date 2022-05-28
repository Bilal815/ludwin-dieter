import React from 'react'
import { Col, Container, Form, Row, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom'

let path = process.env.PUBLIC_URL;
let facebookImage = "/images/facebook.svg";
let twitterImage = "/images/twitter.svg";
let pinterestImage = "/images/pinterest.svg";
let instagramImage = "/images/instagram.svg";
let youtubeImage = "/images/youtube.svg";
let lockImage = "/images/lock.svg";
let paymentIcon = "/images/payment-icon.png";

let SecureIcon = "/images/Secure.svg";
let ShippingIcon = "/images/Shipping.svg";
let storeIcon = "/images/store.svg";
let CalendarIcon = "/images/Calendar.svg";




const Footer = () => {
  return (
    <>
      <footer className='footer'>
        <div className="newsletter__container">
        <Container>
          <Row>
            <Col lg="8"><h3 className='text-uppercase m-0'>Enjoy the ones and get a special welcome reward</h3></Col>
            <Col lg="4">
              <Form className='newsletter'>
                <Row>
                  <Col>
                    <Form.Group className="rounded-0" controlId="formBasicEmail">
                      <Form.Control type="email" placeholder="Email Address" />
                    </Form.Group>
                  </Col>
                  <Col lg="auto">
                    <Button variant="dark" className='rounded-0 btn-dark button ' type="submit">
                    Sign Up
                    </Button>
                  </Col>
                </Row>
              </Form>
            </Col>
          </Row>
        </Container>
        </div>
        <Container>
          <Row>
            <Col lg={3} md={6}>
              <div className="footer__info text-center">
                <img src={path + SecureIcon } alt="lock" />
                <strong className='d-block text-uppercase'>SECURE CHECKOUT</strong>
              </div>
            </Col>
            <Col lg={3} md={6}>
              <div className="footer__info text-center">
                <img src={path + ShippingIcon} alt="lock" />
                <strong className='d-block text-uppercase'>GREEN SHIPPING</strong>
              </div>
            </Col>
            <Col lg={3} md={6}>
              <div className="footer__info text-center">
                <img src={path + storeIcon} alt="lock" />
                <strong className='d-block text-uppercase'>PICKUP IN-STORE</strong>
              </div>
            </Col>
            <Col lg={3} md={6}>
              <div className="footer__info text-center">
                <img src={path + CalendarIcon} alt="lock" />
                <strong className='d-block text-uppercase'>STORE APPOINTMENTS</strong>
              </div>
            </Col>
          </Row>
        </Container>
        <div className="payment__icons__row">
        <Container>
        <Row className='align-items-center'>
            <Col lg={6} md={12}> <img src={path + lockImage} alt="lock" /> we guarantee every transaction 100% secure</Col>
            <Col lg={6} md={12} className='text-end payment__img'><img src={path + paymentIcon} className="img-fluid " alt="payment-icon" /></Col>
          </Row>
        </Container>
        </div>
        <Container>
          <Row className='footer__row'>
            <Col>
              <strong className='widget__title d-block'>Products</strong>
              <ul className='footer__menu'>
                <li><a href="">Sun Glasses</a></li>
                <li><a href="">Eye Glasses</a></li>
                <li><a href="">Lenses</a></li>
                <li><a href="">Prescription</a></li>
                <li><a href="">Polarized</a></li>
                <li><a href="">Customized</a></li>
              </ul>
            </Col>

            <Col>
              <strong className='widget__title d-block'>Special Collections</strong>
              <ul className='footer__menu'>
                <li><a href="">Carporate Sales</a></li>
                <li><a href="">Onesight</a></li>
              </ul>

              <strong className='widget__title d-block'>Shopping Online</strong>
              <ul className='footer__menu'>
                <li><a href="">Size Guidance</a></li>
                <li><a href="">Special Offers</a></li>
                <li><a href="">Gifts</a></li>
                <li><a href="">Tryout</a></li>
              </ul>
            </Col>

            <Col>
              <strong className='widget__title d-block'>Try Online</strong>
              <ul className='footer__menu'>
                <li><a href="">Try Sun Glasses</a></li>
                <li><a href="">Try Lenses</a></li>
                <li><a href="">Try Eye Glasses</a></li>
              </ul>

              <strong className='widget__title d-block'>Do-It In Person</strong>
              <ul className='footer__menu'>
                <li><a href="">Store Locator</a></li>
                <li><a href="">Online & In-Store Services</a></li>
                <li><a href="">Find a Lenscrafters Doctor</a></li>
              </ul>
            </Col>

            <Col>
              <strong className='widget__title d-block'>Help</strong>
              <ul className='footer__menu'>
                <li><a href="">Support</a></li>
                <li><Link to="/blogs">Blogs</Link></li>
                <li><Link to="/faqs">FAQs</Link></li>
                <li><Link to="/reviews">Ludwin Dieter Reviews</Link></li>
                <li><a href="">Track Orders</a></li>
                <li><a href="">Payment Methods</a></li>
                <li><Link to="/about-us">About Us</Link></li>
                <li><Link to="/contact-us">Contact Us</Link></li>
                <li><a href="">Report A Fake</a></li>
              </ul>
            </Col>

            <Col>
              <strong className='widget__title d-block'>Follow Us</strong>
              <ul className='sociale__menu d-flex'>
                <li className='me-4'><a href=""><img src={path + facebookImage}/></a></li>
                <li className='me-4'><a href=""><img src={path + twitterImage}/></a></li>
                <li className='me-4'><a href=""><img src={path + pinterestImage}/></a></li>
                <li className='me-4'><a href=""><img src={path + instagramImage}/></a></li>
                <li className='me-4'><a href=""><img src={path + youtubeImage}/></a></li>
              </ul>


              <ul className='footer__menu mt-3'>
                <li><Link to="/my-account">My Account</Link></li>
                <li><Link to="/checkout">Checkout</Link></li>
                <li><Link to="/cart">Cart</Link></li>
                <li><Link to="/forgot-password">Forgot Password</Link></li>
                <li><Link to="/reset-password">Reset Password</Link></li>
                <li><Link to="/reset-password-link ">Reset Password Link </Link></li>
                <li><Link to="/password-reset-succesfully ">Password Reset Succesfully</Link></li>
              </ul>


            </Col>

          </Row>
          </Container>
      </footer>
    </>
  )
}

export default Footer
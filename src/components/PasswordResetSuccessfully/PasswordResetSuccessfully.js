import React from 'react'
import { Col, Container, Row, Breadcrumb, Form, FloatingLabel, Button } from 'react-bootstrap'
import { Link } from 'react-router-dom'

let path = process.env.PUBLIC_URL;
let accountBg= "/images/account-bg.png";
let eyeIcon= "/images/eye-icon.svg";
let alertIcon= "/images/alert-icon.svg";
let facebookIcon= "/images/facebook-icon.svg";
let googleIcon= "/images/google-icon.svg";
let leftArrow= "/images/left-arrow.svg";
let passwordLinkIcon= "/images/password-link-icon.png";

const PasswordResetSuccessfully = () => {
  return (
    <>
    <Container>

    <Row>
        <Col>
         <div className="page__banner my-account-banner">
             <Row className='align-items-center'>
                 <Col lg="9">
                    <h1 className='text-uppercase'>Your Account</h1>
                    <Breadcrumb>
                    <Breadcrumb>
                    <Breadcrumb.Item href="#">Home</Breadcrumb.Item>
                    <Breadcrumb.Item href="#">Login</Breadcrumb.Item>
                    <Breadcrumb.Item href="#">Forgot Password</Breadcrumb.Item>
                    <Breadcrumb.Item href="#">Reset Password</Breadcrumb.Item>
                    <Breadcrumb.Item active> Password Reset Successfully</Breadcrumb.Item>
                    </Breadcrumb>
                    </Breadcrumb>
                 </Col>
                 <Col lg="3"></Col>
                 <div className="my-account-banner-img"><img src={path + accountBg } className="img-fluid" alt="Product image" /></div>
             </Row>
         </div>
        </Col>
    </Row>

  
    <div className="page__warpper mb-5 pb-5">
    <Row>
        <div className='d-flex justify-content-center'>
            <div className="user__signup__box reset-password-link text-center">
                <div className='text-center login__top__row'>
                    <h3>Password Has Been Reset Successfully!</h3>
                    <p >We have sent a password reset link at: <strong>soeraji@squareteam.com</strong></p></div>
                    <Row>
                        
                    <Col md={{ span: 6, offset: 3 }}>
                    <div className="reset-password-link d-grid">
                        <Link to="/my-account" className="btn button">My Account</Link>
                        <Link to="/shop" className="btn button button-outline mt-4 mb-5">Explore products</Link>
                    </div>
                    </Col>
                    </Row>
                   
            </div>

            
            
        </div>
    </Row>
    </div>
    </Container>
</>
  )
}

export default PasswordResetSuccessfully
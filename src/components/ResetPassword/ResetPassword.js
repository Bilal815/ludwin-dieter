import {React, useState } from 'react'
import { Col, Container, Row, Breadcrumb, Form, FloatingLabel, Button } from 'react-bootstrap'
import { Link } from 'react-router-dom'

let path = process.env.PUBLIC_URL;
let accountBg= "/images/account-bg.png";
let eyeIcon= "/images/eye-icon.svg";
let alertIcon= "/images/alert-icon.svg";
let facebookIcon= "/images/facebook-icon.svg";
let googleIcon= "/images/google-icon.svg";
let leftArrow= "/images/left-arrow.svg";

const ResetPassword = () => {

    const [passwordShown, setPasswordShown] = useState(false);

    const togglePassword = () => {
        setPasswordShown(!passwordShown);
      };

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
                    <Breadcrumb.Item href="#">Home</Breadcrumb.Item>
                    <Breadcrumb.Item active>Register</Breadcrumb.Item>
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
            <div className="user__signup__box gray__form">
                <div className='text-center login__top__row'>
                    <h3>Reset Password</h3>
                    <p >Your email: <strong>soeraji@squareteam.com</strong> has been verified successfully, now you can reset your password.</p></div>
                <div className='form__box '>
                    <Form>
                    <div className="alert input-alert d-flex align-items-center" role="alert">
                    <img src={path + alertIcon } className="img-fluid me-4" alt="Product image" />
<div>
Sorry! We couldn’t find any match <strong>sarangmemon@gmail.com</strong>, Please try again.
</div>
</div>

                        <Form.Floating>
                            <Form.Control
                            id="floatingPasswordCustom"
                            type={passwordShown ? "text" : "password"} 
                            placeholder="Password"
                            />
                            <label htmlFor="floatingPasswordCustom">Password</label>
                            <img src={path + eyeIcon } className="toggle-password" onClick={togglePassword} />
                        </Form.Floating>

                        <Form.Floating>
                            <Form.Control
                            id="floatingPasswordCustom"
                            type={passwordShown ? "text" : "password"} 
                            placeholder="Confirm Password"
                            />
                            <label htmlFor="floatingPasswordCustom">Confirm Password</label>
                            <img src={path + eyeIcon } className="toggle-password" onClick={togglePassword} />
                        </Form.Floating>
           
                    <div className='d-grid'>
                    <Button className="btn button mt-4" type="submit">
                    Reset
                    </Button>
                    </div>
                    </Form>

                        

                </div>
       

<div className="text-center  mt-5 pt-5">               
<p className='text-center fs-5 fw-500'>Don’t want to reset? </p>
<Link to="/sign-in" className='text-decoration-none yellow-color fs-5 text-center fw-500'><img src={path + leftArrow } className="img-fluid me-3" alt="Product image" />Go Back</Link>
</div>
            </div>

            
            
        </div>
    </Row>
    </div>
    </Container>
</>
  )
}

export default ResetPassword
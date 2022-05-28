import {React, useState } from 'react'
import { Col, Container, Row, Breadcrumb, Form, FloatingLabel, Button } from 'react-bootstrap'
import { Link } from 'react-router-dom'


let path = process.env.PUBLIC_URL;
let accountBg= "/images/account-bg.png";
let eyeIcon= "/images/eye-icon.svg";
let alertIcon= "/images/alert-icon.svg";
let facebookIcon= "/images/facebook-icon.svg";
let googleIcon= "/images/google-icon.svg";


const SignIn = () => {

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
                        <h3>Sign In</h3>
                        <p >Just sign in if you have an account in here. Enjoy our Website</p></div>
                    <div className='form__box '>
                        <Form>
                        <div className="alert input-alert d-flex align-items-center" role="alert">
                        <img src={path + alertIcon } className="img-fluid me-4" alt="Product image" />
<div>
We’re sorry we couldn’t match your email/username or password, please try again.
</div>
</div>

                        <Form.Floating>
                            <Form.Control
                            id="floatingInputCustom"
                            type="email"
                            placeholder="Your Email / Username"
                            />
                            <label htmlFor="floatingInputCustom">Your Email / Username</label>
                        </Form.Floating>
                        <Form.Floating>
                            <Form.Control
                            id="floatingPasswordCustom"
                            type={passwordShown ? "text" : "password"} 
                            placeholder="Enter Password"
                            />
                            <label htmlFor="floatingPasswordCustom">Enter Password</label>
                            <img src={path + eyeIcon } className="toggle-password" onClick={togglePassword} />
                        </Form.Floating>

                    <Row>
                        <Col>
                        {['checkbox'].map((type) => (
                                <div key={`default-${type}`} className="mb-3 fs-6">
                                <Form.Check 
                                    type={type}
                                    id={`default-${type}`}
                                    label="Remember Me"
                                />
                                </div>
                            ))}
                        </Col>
                        <Col className='text-end'> <Link to="/forgot-password" className='abc fs-6 text-decoration-none cgreen-color fw-500 mobile-fs-14'>Forgot Password</Link> </Col>
                    </Row>


                        <div className='d-grid'>
                        <Button className="btn button mt-4" type="submit">
                            Login
                        </Button>
                        </div>
                        </Form>

                            

                    </div>
                    <div className="or text-center pt-5 pb-5">
                                <hr />
                                <p> OR</p>
                            </div>
                    
                            <div class="d-flex social__login__btn mb-5 pb-4">
<a href="#" className='btn facebook-login'><img src={path + facebookIcon } className="img-fluid me-2" alt="Product image" /> Login with Facebook</a>
<a href="#" className='btn google-login'><img src={path + googleIcon } className="img-fluid me-2" alt="Product image" /> Login with Google</a>
</div>
<p className='text-center fs-5 fw-500  mt-5 pb-5 mobile-fs-14'>Don’t have an LWD account? 
<Link to="/sign-up" className='text-decoration-none yellow-color '>  Sign Up</Link> </p>
                </div>

                
                
            </div>
        </Row>
        </div>
        </Container>
    </>
  )
}

export default SignIn
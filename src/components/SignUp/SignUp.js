import {React, useState } from 'react'
import { Col, Container, Row, Breadcrumb, Form, FloatingLabel, Button } from 'react-bootstrap'
import { Link } from 'react-router-dom'


let path = process.env.PUBLIC_URL;
let accountBg= "/images/account-bg.png";
let eyeIcon= "/images/eye-icon.svg";
let alertIcon= "/images/alert-icon.svg";
let facebookIcon= "/images/facebook-icon.svg";
let googleIcon= "/images/google-icon.svg";


const SignUp = () => {

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
                    <h3>Sign Up</h3>
                    <p >Just sign in if you have an account in here. Enjoy our Website.</p></div>
                <div className='form__box '>
                    <Form>
                    <div className="alert input-alert d-flex align-items-center" role="alert">
                        <img src={path + alertIcon } className="img-fluid me-4" alt="Product image" />
                        <div>
                        Oops! Email address already exists in our database, please make sure that you have your email address. Thank you!
                        </div>
                    </div>

    <Row>
        <Col lg="6">
            <Form.Floating>
                <Form.Control
                id="floatingInputCustom"
                type="text"
                placeholder="First Name"
                />
                <label htmlFor="floatingInputCustom">First Name</label>
            </Form.Floating>
        </Col>
        <Col lg="6">
            <Form.Floating>
                <Form.Control
                id="floatingInputCustom"
                type="text"
                placeholder="Last Name"
                />
                <label htmlFor="floatingInputCustom">Last Name</label>
            </Form.Floating>
        </Col>
    </Row>

    <Row>
        <Col lg="6">
            <Form.Floating>
                <Form.Control
                id="floatingInputCustom"
                type="tel"
                placeholder="Phone Number"
                />
                <label htmlFor="floatingInputCustom">Phone Number</label>
            </Form.Floating>
         
        </Col>
        <Col lg="6">
            <Form.Floating>
                <Form.Control
                id="floatingInputCustom"
                type="text"
                placeholder="Country"
                />
                <label htmlFor="floatingInputCustom">Country</label>
            </Form.Floating>
        </Col>
    </Row>
                    <Form.Floating>
                        <Form.Control
                        id="floatingInputCustom"
                        type="email"
                        placeholder="Your Email / Username"
                        />
                        <label htmlFor="floatingInputCustom">Your Email / Username</label>
                    </Form.Floating>


                    <Row>
        <Col lg="6">
            <Form.Floating>
                <Form.Control
                id="floatingPasswordCustom"
                type={passwordShown ? "text" : "password"} 
                placeholder="Enter Password"
                />
                <label htmlFor="floatingPasswordCustom">Enter Password</label>
                <img src={path + eyeIcon } className="toggle-password" onClick={togglePassword} />
            </Form.Floating>
        </Col>
        <Col lg="6">
            <Form.Floating>
                <Form.Control
                id="floatingPasswordCustom"
                type={passwordShown ? "text" : "password"} 
                placeholder="Confirm Password"
                />
                <label htmlFor="floatingPasswordCustom">Confirm Password</label>
                <img src={path + eyeIcon } className="toggle-password" onClick={togglePassword} />
            </Form.Floating>
        </Col>
    </Row>      

                <Row>
                    <Col>

                {['checkbox'].map((type) => (
                    <div key={type} className="mb-4 mt-3">
                    <Form.Check type={type} id={`check-api-${type}`}>
                        <Form.Check.Input type={type} />
                        <Form.Check.Label>I agree to Ludwin Dieters’ <a href="#" className='text-decoration-none cgreen-color'>Cookie</a> and <a href="#" className='cgreen-color text-decoration-none'>Privacy Policy</a>.</Form.Check.Label>
                        <Form.Control.Feedback type="valid">You did it!</Form.Control.Feedback>
                    </Form.Check>
                    </div>
                ))}

                    </Col>
                </Row>


                    <div className='d-grid'>
                    <Button className="btn button mt-4" type="submit">
                    Sign Up
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
<Link to="/sign-in" className='text-decoration-none yellow-color '>  Sign In</Link> </p>
            </div>

            
            
        </div>
    </Row>
    </div>
    </Container>
</>
  )
}

export default SignUp
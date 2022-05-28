import React from 'react'
import { Col, Container, Row, Breadcrumb, Form, FloatingLabel, Button, Accordion } from 'react-bootstrap'
import { Link } from 'react-router-dom'

import HomeCTAThree from '../../HomeCTAThree/HomeCTAThree'

let path = process.env.PUBLIC_URL;
let clientImg = "/images/client.png";
let shopBanner = "/images/shop-banner.png";
let homeCTABannerTwoImage = "/images/home-cta-banner-2.jpg";
let aboutImg = "/images/about-img.jpg";
let virtualImg = "/images/virtual-try-on-img.svg";
let hotlineImg = "/images/hotline.svg";
let chatImg = "/images/chat.svg";
let faqImg = "/images/faq.svg";
let phoneImg = "/images/phone.svg";
let messageImg = "/images/message.svg";
let accountBg= "/images/account-bg.png";
let eyeIcon= "/images/eye-icon.svg";
let alertIcon= "/images/alert-icon.svg";
let facebookIcon= "/images/facebook-icon.svg";
let googleIcon= "/images/google-icon.svg";


const Contact = () => {
  return (
    <>
      <Container>
      <Row>
           <Col>
            <div className="page__banner">
                 <Row className='align-items-center'>
                     <Col lg="9">
                        <h1 className='text-uppercase'>Contact Us</h1>
                        <Breadcrumb>
                        <Breadcrumb.Item href="#">Home</Breadcrumb.Item>
                        <Breadcrumb.Item active>Contact  us</Breadcrumb.Item>
                        </Breadcrumb>
                     </Col>
                     <Col lg="3"></Col>
                     <div className="my-account-banner-img"><img src={path + shopBanner } className="img-fluid" alt="Product image" /></div>
                 </Row>
             </div>
           </Col>
         </Row>
         <section className="contact__section">
           <Row>
             <Col lg={4} className='text-center'>
               <div className="contact__info__box d-flex align-items-center justify-content-center">
                 <div className="contact__box__inner">
                  <img src={path + hotlineImg } className="img-fluid mb-4" alt="Product image" />
                    <strong className="d-block">HOTLINE</strong>
                    <strong className="d-block">(+1) 482 133 2838</strong>
                    <p>Give us a call! We are here for you 24/7</p>
                    <a class="btn button rounded-0 mt-4" href="/"> Call Us</a>
                 </div>
               </div>
             </Col>
             <Col lg={4} className='text-center'>
               <div className="contact__info__box d-flex align-items-center justify-content-center">
               <div className="contact__box__inner">
               <img src={path + chatImg } className="img-fluid mb-4" alt="Product image" />
                 <strong className="d-block">LIVE CHAT</strong>
                 <p>Chat online with our expert customer service team 24/7.</p>
                 <a class="btn button rounded-0 mt-4" href="/"> Start Live Chat</a>
               </div>
               </div>
             </Col>
             <Col lg={4} className='text-center'>
               <div className="contact__info__box d-flex align-items-center justify-content-center">
               <div className="contact__box__inner">
               <img src={path + faqImg } className="img-fluid mb-4" alt="Product image" />
                 <strong className="d-block">HELP & FAQS</strong>
                 <p>All your eyewear questions answered all in one place.</p>
                 <a class="btn button rounded-0 mt-4" href="/"> Visit FAQs Page</a>
               </div>
               </div>
             </Col>
           </Row>
           <Row className='get__touch__row'>
             <Col lg={6}>
               <div className='primary__content get__touch__content'>
                 <h3 className='text-uppercase'>Get in Touch <br/>
With us</h3>
<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
<ul className='ps-0 contact__info mt-5'>
  <li className='list-unstyled mb-4'><a className='text-decoration-none' href="tel:03236682726"><img src={path + phoneImg } className="img-fluid me-3" alt="Product image" />03236682726</a></li>
  <li className='list-unstyled mb-4'><a className='text-decoration-none' href="mailto:touch@ludwindieter.com"><img src={path + messageImg } className="img-fluid me-3" alt="Product image" />touch@ludwindieter.com</a></li>
</ul>
               </div>

             </Col>
             <Col lg={6}>
             <div className="user__signup__box gray__form w-100">
                    <div className='form__box '>
                        <Form>

                        <Form.Floating>
                            <Form.Control
                            id="floatingInputCustom"
                            type="text"
                            placeholder="Your Name"
                            />
                            <label htmlFor="floatingInputCustom">Your Name</label>
                        </Form.Floating>

                        <Form.Floating>
                            <Form.Control
                            id="floatingInputCustom"
                            type="email"
                            placeholder="Email Address"
                            />
                            <label htmlFor="floatingInputCustom">Email Address</label>
                        </Form.Floating>


                        <Form.Group className="mb-4" controlId="exampleForm.ControlTextarea1">
                        <Form.Floating>
                        <Form.Control as="textarea" rows={5} id="message" placeholder="Your Message" />
                        <label htmlFor="message">Your Message</label>
                        </Form.Floating>
                    </Form.Group>


                    <Row>
                
                        {['checkbox'].map((type) => (
                                <div key={`default-${type}`} className="mb-3 fs-6">
                                <Form.Check 
                                    type={type}
                                    id={`default-${type}`}
                                    label="Subscribe to our newsletter"
                                />
                                </div>
                            ))}
                   
                    </Row>


                        <div className='d-grid'>
                        <Button className="btn button" type="submit">
                        Send Us A Message
                        </Button>
                        </div>
                        </Form>

                            

                    </div>
              
                </div>
             </Col>
           </Row>
         </section>
         < HomeCTAThree />
      </Container>
    </>
  )
}

export default Contact
import React from 'react'
import { Col, Container, Row, Breadcrumb, Form, FloatingLabel, Button, Accordion } from 'react-bootstrap'
import { Link } from 'react-router-dom'

import HomeCTAThree from '../HomeCTAThree/HomeCTAThree'

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

let blog1 = "/images/blog-1.jpg";
let blog2 = "/images/blog-2.jpg";
let blog3 = "/images/blog-3.jpg";
let BlogBtnArrow = "/images/blog-btn-arrow.svg";

const Blogs = () => {
  return (
    <>
      <Container>
      <Row>
           <Col>
            <div className="page__banner">
                 <Row className='align-items-center'>
                     <Col lg="9">
                        <h1 className='text-uppercase'>Blogs</h1>
                        <Breadcrumb>
                        <Breadcrumb.Item href="#">Home</Breadcrumb.Item>
                        <Breadcrumb.Item active>Blogs</Breadcrumb.Item>
                        </Breadcrumb>
                     </Col>
                     <Col lg="3"></Col>
                     <div className="my-account-banner-img"><img src={path + shopBanner } className="img-fluid" alt="Product image" /></div>
                 </Row>
             </div>
           </Col>
         </Row>

        <Row className='blog__row'>

            <Col lg={4} md="6">
                <div className="blog__col">
                    <div className="blog__img">
                        <Link to="/blog-detail"><img src={path + blog1 } className="img-fluid" alt="Product image" /></Link>
                    </div>
                    <div className="blog__content">
                        <div className="meta d-flex justify-content-between align-items-center pt-4 pb-2">
                            <span className='date'>Mon, 22 April, 2022</span>
                            <span className="auhtor">By: Ali Mujtaba</span>
                        </div>
                        <h4> <Link to="/blog-detail" className='text-decoration-none'>What’s the best way to contact Ludwin Dieter Customer service?</Link> </h4>
                        <Link to="/blog-detail" className='text-decoration-none blog__read__more'>READ MORE<img src={path + BlogBtnArrow } className="img-fluid ms-2" alt="Product image" /></Link>
                    </div>
                </div>
            </Col>

            <Col lg={4} md="6">
                <div className="blog__col">
                    <div className="blog__img">
                        <Link to="/blog-detail"><img src={path + blog2 } className="img-fluid" alt="Product image" /></Link>
                    </div>
                    <div className="blog__content">
                        <div className="meta d-flex justify-content-between align-items-center pt-4 pb-2">
                            <span className='date'>Mon, 22 April, 2022</span>
                            <span className="auhtor">By: Ali Mujtaba</span>
                        </div>
                        <h4> <Link to="/blog-detail" className='text-decoration-none'>What’s the best way to contact Ludwin Dieter Customer service?</Link> </h4>
                        <Link to="/blog-detail" className='text-decoration-none blog__read__more'>READ MORE<img src={path + BlogBtnArrow } className="img-fluid ms-2" alt="Product image" /></Link>
                    </div>
                </div>
            </Col>

            <Col lg={4} md="6">
                <div className="blog__col">
                    <div className="blog__img">
                        <Link to="/blog-detail"><img src={path + blog3 } className="img-fluid" alt="Product image" /></Link>
                    </div>
                    <div className="blog__content">
                        <div className="meta d-flex justify-content-between align-items-center pt-4 pb-2">
                            <span className='date'>Mon, 22 April, 2022</span>
                            <span className="auhtor">By: Ali Mujtaba</span>
                        </div>
                        <h4> <Link to="/blog-detail" className='text-decoration-none'>What’s the best way to contact Ludwin Dieter Customer service?</Link> </h4>
                        <Link to="/blog-detail" className='text-decoration-none blog__read__more'>READ MORE<img src={path + BlogBtnArrow } className="img-fluid ms-2" alt="Product image" /></Link>
                    </div>
                </div>
            </Col>
          
            <Col lg={4} md="6">
                <div className="blog__col">
                    <div className="blog__img">
                        <Link to="/blog-detail"><img src={path + blog1 } className="img-fluid" alt="Product image" /></Link>
                    </div>
                    <div className="blog__content">
                        <div className="meta d-flex justify-content-between align-items-center pt-4 pb-2">
                            <span className='date'>Mon, 22 April, 2022</span>
                            <span className="auhtor">By: Ali Mujtaba</span>
                        </div>
                        <h4> <Link to="/blog-detail" className='text-decoration-none'>What’s the best way to contact Ludwin Dieter Customer service?</Link> </h4>
                        <Link to="/blog-detail" className='text-decoration-none blog__read__more'>READ MORE<img src={path + BlogBtnArrow } className="img-fluid ms-2" alt="Product image" /></Link>
                    </div>
                </div>
            </Col>

            <Col lg={4} md="6">
                <div className="blog__col">
                    <div className="blog__img">
                        <Link to="/blog-detail"><img src={path + blog2 } className="img-fluid" alt="Product image" /></Link>
                    </div>
                    <div className="blog__content">
                        <div className="meta d-flex justify-content-between align-items-center pt-4 pb-2">
                            <span className='date'>Mon, 22 April, 2022</span>
                            <span className="auhtor">By: Ali Mujtaba</span>
                        </div>
                        <h4> <Link to="/blog-detail" className='text-decoration-none'>What’s the best way to contact Ludwin Dieter Customer service?</Link> </h4>
                        <Link to="/blog-detail" className='text-decoration-none blog__read__more'>READ MORE<img src={path + BlogBtnArrow } className="img-fluid ms-2" alt="Product image" /></Link>
                    </div>
                </div>
            </Col>

            <Col lg={4} md="6">
                <div className="blog__col">
                    <div className="blog__img">
                        <Link to="/blog-detail"><img src={path + blog3 } className="img-fluid" alt="Product image" /></Link>
                    </div>
                    <div className="blog__content">
                        <div className="meta d-flex justify-content-between align-items-center pt-4 pb-2">
                            <span className='date'>Mon, 22 April, 2022</span>
                            <span className="auhtor">By: Ali Mujtaba</span>
                        </div>
                        <h4> <Link to="/blog-detail" className='text-decoration-none'>What’s the best way to contact Ludwin Dieter Customer service?</Link> </h4>
                        <Link to="/blog-detail" className='text-decoration-none blog__read__more'>READ MORE<img src={path + BlogBtnArrow } className="img-fluid ms-2" alt="Product image" /></Link>
                    </div>
                </div>
            </Col>

            
            <Col lg={4} md="6">
                <div className="blog__col">
                    <div className="blog__img">
                        <Link to="/blog-detail"><img src={path + blog1 } className="img-fluid" alt="Product image" /></Link>
                    </div>
                    <div className="blog__content">
                        <div className="meta d-flex justify-content-between align-items-center pt-4 pb-2">
                            <span className='date'>Mon, 22 April, 2022</span>
                            <span className="auhtor">By: Ali Mujtaba</span>
                        </div>
                        <h4> <Link to="/blog-detail" className='text-decoration-none'>What’s the best way to contact Ludwin Dieter Customer service?</Link> </h4>
                        <Link to="/blog-detail" className='text-decoration-none blog__read__more'>READ MORE<img src={path + BlogBtnArrow } className="img-fluid ms-2" alt="Product image" /></Link>
                    </div>
                </div>
            </Col>

            <Col lg={4} md="6">
                <div className="blog__col">
                    <div className="blog__img">
                        <Link to="/blog-detail"><img src={path + blog2 } className="img-fluid" alt="Product image" /></Link>
                    </div>
                    <div className="blog__content">
                        <div className="meta d-flex justify-content-between align-items-center pt-4 pb-2">
                            <span className='date'>Mon, 22 April, 2022</span>
                            <span className="auhtor">By: Ali Mujtaba</span>
                        </div>
                        <h4> <Link to="/blog-detail" className='text-decoration-none'>What’s the best way to contact Ludwin Dieter Customer service?</Link> </h4>
                        <Link to="/blog-detail" className='text-decoration-none blog__read__more'>READ MORE<img src={path + BlogBtnArrow } className="img-fluid ms-2" alt="Product image" /></Link>
                    </div>
                </div>
            </Col>

            <Col lg={4} md="6">
                <div className="blog__col">
                    <div className="blog__img">
                        <Link to="/blog-detail"><img src={path + blog3 } className="img-fluid" alt="Product image" /></Link>
                    </div>
                    <div className="blog__content">
                        <div className="meta d-flex justify-content-between align-items-center pt-4 pb-2">
                            <span className='date'>Mon, 22 April, 2022</span>
                            <span className="auhtor">By: Ali Mujtaba</span>
                        </div>
                        <h4> <Link to="/blog-detail" className='text-decoration-none'>What’s the best way to contact Ludwin Dieter Customer service?</Link> </h4>
                        <Link to="/blog-detail" className='text-decoration-none blog__read__more'>READ MORE<img src={path + BlogBtnArrow } className="img-fluid ms-2" alt="Product image" /></Link>
                    </div>
                </div>
            </Col>

        </Row>

         <Row className='text-center mb-5'>
                    <div><a href='' className='btn btn-style-1 black-outline-btn rounded-0' id='loadMore'>Show More</a></div>
        </Row>

         < HomeCTAThree />
      </Container>
    </>
  )
}

export default Blogs
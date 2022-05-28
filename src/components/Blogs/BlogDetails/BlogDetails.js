import React from 'react'
import { Col, Container, Row, Breadcrumb, Form, FloatingLabel, Button, Accordion } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import { Navigation, A11y } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';

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

let blog1 = "/images/blog-1.jpg";
let blog2 = "/images/blog-2.jpg";
let blog3 = "/images/blog-3.jpg";
let BlogBtnArrow = "/images/blog-btn-arrow.svg";


let productImg1 = "/images/product-1.png";
let productImg2 = "/images/product-2.png";
let productImg3 = "/images/product-3.png";
let productImg4 = "/images/product-4.png";

const BlogDetails = () => {
  return (
    <>
    <Container>
    <Row>
         <Col>
          <div className="page__banner">
               <Row className='align-items-center'>
                   <Col lg="9">
                      <h1 className='text-uppercase'>Blog Post</h1>
                      <Breadcrumb>
                      <Breadcrumb.Item href="#">Home</Breadcrumb.Item>
                      <Breadcrumb.Item href="#">Blos</Breadcrumb.Item>
                      <Breadcrumb.Item active>What’s the best way to contact Ludwin Dieter Customer service?</Breadcrumb.Item>
                      </Breadcrumb>
                   </Col>
                   <Col lg="3"></Col>
                   <div className="my-account-banner-img"><img src={path + shopBanner } className="img-fluid" alt="Product image" /></div>
               </Row>
           </div>
         </Col>
       </Row>



       <div className="blog__single__wrapper">
           <Row>
               <Col lg={9}>
                   <main>
                        <img src={path + blog1 } className="img-fluid" alt="Product image" />
                        <div className="blog__main  mt-lg-5  pt-4">
                        <h2 className='mb-lg-5 mb-md-3 mt-4'>What’s the best way to contact Ludwin Dieter Customer service?</h2>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>                  
                        </div>
                   </main>
               </Col>
               <Col lg={3}>
                   <aside className='blog__sidebar'>
                   <div className='blog__row'>

                    <Col lg={12}>
                        <div className="blog__col">
                            <div className="blog__img">
                                <Link to="/blog-detail"><img src={path + blog1 } className="img-fluid" alt="Product image" /></Link>
                            </div>
                            <div className="blog__content pt-3">
                            <h4> <Link to="/blog-detail" className='text-decoration-none'>What’s the best way to contact Ludwin Dieter Customer service?</Link> </h4>
                                <div className="meta d-flex justify-content-between align-items-center">
                                    <span className='date'>Mon, 22 April, 2022</span>
                                    <span className="auhtor">By: Ali Mujtaba</span>
                                </div>
                            </div>
                        </div>
                    </Col>

                    <Col lg={12}>
                        <div className="blog__col">
                            <div className="blog__img">
                                <Link to="/blog-detail"><img src={path + blog2 } className="img-fluid" alt="Product image" /></Link>
                            </div>
                            <div className="blog__content pt-3">
                            <h4> <Link to="/blog-detail" className='text-decoration-none'>What’s the best way to contact Ludwin Dieter Customer service?</Link> </h4>
                                <div className="meta d-flex justify-content-between align-items-center">
                                    <span className='date'>Mon, 22 April, 2022</span>
                                    <span className="auhtor">By: Ali Mujtaba</span>
                                </div>
                            </div>
                        </div>
                    </Col>

                    <Col lg={12}>
                        <div className="blog__col">
                            <div className="blog__img">
                                <Link to="/blog-detail"><img src={path + blog3 } className="img-fluid" alt="Product image" /></Link>
                            </div>
                            <div className="blog__content pt-3">
                                <h4> <Link to="/blog-detail" className='text-decoration-none'>What’s the best way to contact Ludwin Dieter Customer service?</Link> </h4>
                                <div className="meta d-flex justify-content-between align-items-center pt-4 pb-2">
                                    <span className='date'>Mon, 22 April, 2022</span>
                                    <span className="auhtor">By: Ali Mujtaba</span>
                                </div>
                            </div>
                        </div>
                    </Col>


                    </div>
                   </aside>
               </Col>
           </Row>

           <section className='people__also__bought'>
                <h4 className='text-uppercase people__also__bought__title'>Recommended For You</h4>
                    <Swiper
                    modules={[Navigation, A11y]}
                    navigation
                    spaceBetween={17}
                    slidesPerView={4}
                    breakpoints={{
                        320: {
                          slidesPerView: 1,
                          spaceBetween: 0,
                        },
                        768: {
                          slidesPerView: 2,
                          spaceBetween: 17,
                        },
                        1024: {
                          slidesPerView: 4,
                          spaceBetween: 17,
                        },
                      }}
                    onSlideChange={() => console.log('slide change')}
                    onSwiper={(swiper) => console.log(swiper)}
        >
                    <SwiperSlide>
                    <div  className="product__col">
                            <div className='product__card'>
                                <a href='' className='product__image'>
                                    <img src={path + productImg1 } alt="Product image" />
                                </a>
                                <div className="product__date">
                                    <a href="" className='product__title'><strong>RAYBAN POLARIZED 3025</strong></a>
                                    <span className='product__category__name'>Eye Glasses</span>
                                <div class="product__price">
                                    <span class="product__price__regular">$59.99 <span class="product__price__old">$85.99
                                    </span></span>
                                </div>

                                </div>
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                    <div className="product__col">
                                <div className='product__card'>
                                    <a href='' className='product__image'>
                                        <img src={path + productImg2 } alt="Product image" />
                                    </a>
                                    <div className="product__date">
                                        <a href="" className='product__title'><strong>RAYBAN POLARIZED 3025</strong></a>
                                        <span className='product__category__name'>Eye Glasses</span>
                                    <div class="product__price">
                                    <span class="product__price__regular">$59.99 <span class="product__price__old">$85.99
                                        </span></span>
                                    </div>

                                    </div>
                                </div>
                            </div>
                    </SwiperSlide>
                    <SwiperSlide>
                    <div className="product__col">
                                <div className='product__card'>
                                    <a href='' className='product__image'>
                                        <img src={path + productImg3 } alt="Product image" />
                                    </a>
                                    <div className="product__date">
                                        <a href="" className='product__title'><strong>RAYBAN POLARIZED 3025</strong></a>
                                        <span className='product__category__name'>Eye Glasses</span>
                                    <div class="product__price">
                                    <span class="product__price__regular">$59.99 <span class="product__price__old">$85.99
                                        </span></span>
                                    </div>

                                    </div>
                                </div>
                            </div>
                    </SwiperSlide>
                    <SwiperSlide>
                    <div className="product__col">
                                <div className='product__card'>
                                    <a href='' className='product__image'>
                                        <img src={path + productImg4 } alt="Product image" />
                                    </a>
                                    <div className="product__date">
                                        <a href="" className='product__title'><strong>RAYBAN POLARIZED 3025</strong></a>
                                        <span className='product__category__name'>Eye Glasses</span>
                                    <div class="product__price">
                                    <span class="product__price__regular">$59.99 <span class="product__price__old">$85.99
                                        </span></span>
                                    </div>

                                    </div>
                                </div>
                            </div>
                    </SwiperSlide>
                    <SwiperSlide>
                    <div  className="product__col">
                            <div className='product__card'>
                                <a href='' className='product__image'>
                                    <img src={path + productImg1 } alt="Product image" />
                                </a>
                                <div className="product__date">
                                    <a href="" className='product__title'><strong>RAYBAN POLARIZED 3025</strong></a>
                                    <span className='product__category__name'>Eye Glasses</span>
                                <div class="product__price">
                                    <span class="product__price__regular">$59.99 <span class="product__price__old">$85.99
                                    </span></span>
                                </div>

                                </div>
                            </div>
                        </div>
                    </SwiperSlide>
                </Swiper>
            </section>

       </div>

      

  

       < HomeCTAThree />
    </Container>
  </>
  )
}

export default BlogDetails
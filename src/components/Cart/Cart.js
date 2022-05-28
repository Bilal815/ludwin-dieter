import React from 'react'
import { Container, Row, Col, Breadcrumb, Form, Table } from 'react-bootstrap'
import { Navigation, A11y } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';

let path = process.env.PUBLIC_URL;
let singleProductBanner = "/images/single-product-banner.png";
let productImg1 = "/images/product-1.png";
let productImg2 = "/images/product-2.png";
let productImg3 = "/images/product-3.png";
let productImg4 = "/images/product-4.png";


let deletIcon = <svg width="23" height="26" viewBox="0 0 23 26" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M22.375 4.66663H16.3333V0.666626H6.66667V4.66663H0.625V7.33329H1.91671L3.12504 26H19.875L21.0833 7.33329H22.375V4.66663ZM9.08333 3.33329H13.9167V4.66663H9.08333V3.33329ZM17.625 23.3333H5.37496L4.33942 7.33329H18.6606L17.625 23.3333Z" fill="#001646"/>
<path d="M10.2917 10H7.875V20.6667H10.2917V10Z" fill="#001646"/>
<path d="M15.1257 10H12.709V20.6667H15.1257V10Z" fill="#001646"/>
</svg>;

const Cart = () => {
  return (
   <>
    <Container>
        <Row>
            <Col>
             <div className="page__banner">
                 <Row className='align-items-center'>
                     <Col lg="9">
                        <h1 className='text-uppercase'>shopping Bag</h1>
                        <Breadcrumb>
                        <Breadcrumb.Item href="#">Home</Breadcrumb.Item>
                        <Breadcrumb.Item active>shopping Bag</Breadcrumb.Item>
                        </Breadcrumb>
                     </Col>
                    
                 <Col lg="3"></Col>
                 <div className="my-account-banner-img"><img src={path + singleProductBanner } className="img-fluid" alt="Product image" /></div>
                 </Row>
             </div>
            </Col>
         </Row>
         <div className="div cart__wrapper">
         <Row>
                <Col>
                <Table responsive className='cart__table table-borderless'>
                    <thead>
                        <tr>
                        <th></th>
                        <th><strong>Product Name</strong></th>
                        <th><strong>Price</strong></th>
                        <th><strong>Quantity</strong></th>
                        <th><strong>Total</strong></th>
                        <th></th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr className='cart__row align-middle'>
                        <td className='cart__img'>
                            <a href=""><img src={path + productImg1 } className="img-fluid" alt="Product image" /></a>
                        </td>
                        <td className='cart__table__product'><h4>RAYBAN POLARIZED 3025</h4></td>
                        <td className='cart__td'><strong>$99</strong></td>
                        <td className='cart__td'><strong>2</strong></td>
                        <td className='cart__td'><strong>$198</strong></td>
                        <td className='cart__td text-end'><span className="delete__cart__item me-5">{deletIcon}</span></td>
                        </tr>

                        <tr className='cart__row align-middle'>
                        <td className='cart__img'>
                            <a href=""><img src={path + productImg1 } className="img-fluid" alt="Product image" /></a>
                        </td>
                        <td className='cart__table__product'><h4>RAYBAN POLARIZED 3025</h4></td>
                        <td className='cart__td'><strong>$99</strong></td>
                        <td className='cart__td'><strong>2</strong></td>
                        <td className='cart__td'><strong>$198</strong></td>
                        <td className='cart__td text-end'><span className="delete__cart__item me-5">{deletIcon}</span></td>
                        </tr>

                        <tr className='cart__row align-middle'>
                        <td className='cart__img'>
                            <a href=""><img src={path + productImg1 } className="img-fluid" alt="Product image" /></a>
                        </td>
                        <td className='cart__table__product'><h4>RAYBAN POLARIZED 3025</h4></td>
                        <td className='cart__td'><strong>$99</strong></td>
                        <td className='cart__td'><strong>2</strong></td>
                        <td className='cart__td'><strong>$198</strong></td>
                        <td className='cart__td text-end'><span className="delete__cart__item me-5">{deletIcon}</span></td>
                        </tr>

                        <tr className='cart__row align-middle'>
                        <td className='cart__img'>
                            <a href=""><img src={path + productImg1 } className="img-fluid" alt="Product image" /></a>
                        </td>
                        <td className='cart__table__product'><h4>RAYBAN POLARIZED 3025</h4></td>
                        <td className='cart__td'><strong>$99</strong></td>
                        <td className='cart__td'><strong>2</strong></td>
                        <td className='cart__td'><strong>$198</strong></td>
                        <td className='cart__td text-end'><span className="delete__cart__item me-5">{deletIcon}</span></td>
                        </tr>
                   
                   
                    </tbody>
                </Table>
                </Col>
         </Row>
         <Row className='mt-4 mb-5'>
             <Col lg="6">
                 <div className="coupen__wrapper">
                     <div className="coupen__box">
                         <h4 className='mb-4'>Have a Coupon?</h4>
                            <Form.Control size="lg" type="text" placeholder="Input your email here" />
                            <button type="button" className="btn button">
                                Apply Coupon         
                            </button>
                     </div>
                 </div>
             </Col>
             <Col lg="6">
                 <div className="cart__total__wrapper">
                    <Row>
                        <Col><h4 className='mb-4'>Cart Totals</h4></Col>
                    </Row>
                    <Row className='mb-3'>
                        <Col lg="4">
                            <h6 >Subtotal</h6>
                        </Col>
                        <Col>
                            <span>$150</span>
                        </Col>
                    </Row>
                    <Row className='mb-4'>
                        <Col lg="4">
                            <h6>Shipping</h6>
                        </Col>
                        <Col>
                            <span>Free Shipping</span>
                        </Col>
                        <Col className='text-end'><a href="" className='change__shipping__link'>Change</a> </Col>
                    </Row>
                    <Row className='mb-3'>
                        <Col lg="4">
                            <h6>Total</h6>
                        </Col>
                        <Col>
                            <span>$350</span>
                        </Col>
                    </Row>
                    <Row>
                        <Col className='d-grid'>
                            <button type="button" className="btn button">
                            Checkout        
                            </button>
                        </Col>
                    </Row>
                 </div>
             </Col>
         </Row>
  


            <section className='people__also__bought'>
                <h4 className='text-uppercase people__also__bought__title'>More for you</h4>
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
    </Container>

   </>
  )
}

export default Cart
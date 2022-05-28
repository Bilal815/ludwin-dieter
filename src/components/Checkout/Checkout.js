import React from 'react'
import { Container, Row, Col, Breadcrumb, Form, Table, Button } from 'react-bootstrap'
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
let rightIcon = "/images/right-icon.svg";


let deletIcon = <svg width="23" height="26" viewBox="0 0 23 26" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M22.375 4.66663H16.3333V0.666626H6.66667V4.66663H0.625V7.33329H1.91671L3.12504 26H19.875L21.0833 7.33329H22.375V4.66663ZM9.08333 3.33329H13.9167V4.66663H9.08333V3.33329ZM17.625 23.3333H5.37496L4.33942 7.33329H18.6606L17.625 23.3333Z" fill="#001646"/>
<path d="M10.2917 10H7.875V20.6667H10.2917V10Z" fill="#001646"/>
<path d="M15.1257 10H12.709V20.6667H15.1257V10Z" fill="#001646"/>
</svg>;

const Checkout = () => {
  return (
    <>
        <Container>
        <Row>
            <Col>
             <div className="page__banner">
                 <Row className='align-items-center'>
                     <Col lg="9">
                        <h1 className='text-uppercase'>Checkout</h1>
                        <Breadcrumb>
                        <Breadcrumb.Item href="#">Home</Breadcrumb.Item>
                        <Breadcrumb.Item href="#">Shoping Bag</Breadcrumb.Item>
                        <Breadcrumb.Item active>Checkout</Breadcrumb.Item>
                        </Breadcrumb>
                     </Col>
                     <Col lg="3"></Col>
                     <div className="my-account-banner-img"><img src={path + singleProductBanner } className="img-fluid" alt="Product image" /></div>
                 </Row>
             </div>
            </Col>
         </Row>
        <div className="checkout__wrapper mb-5">
        <Row>
            <Col lg="8">
            <Form className='checkout__form'>
                <div className="shipping__details mb-5">
                <h3 className='title'>Your Shipping Details</h3>
                <Form.Group className="mb-4" controlId="formBasicEmail">
                    <Form.Label>Email Address</Form.Label>
                    <Form.Control type="email" placeholder="Email address" />
                </Form.Group>

                <Form.Group className="mb-4" controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="password" placeholder="Password" />
                </Form.Group>
                </div>
                <div className="shipping__address mb-5">
                <h3 className='title'>Shipping Address</h3>
                <Row>
                    <Col lg="6">
                        <Form.Group className="mb-4" controlId="formBasicEmail">
                            <Form.Label>First Name</Form.Label>
                            <Form.Control type="text" placeholder="First Name" />
                        </Form.Group>
                    </Col>
                    <Col lg="6">
                        <Form.Group className="mb-4" controlId="formBasicEmail">
                            <Form.Label>Last Name</Form.Label>
                            <Form.Control type="text" placeholder="Last Name" />
                        </Form.Group>
                    </Col>
                </Row>
                <Form.Group className="mb-4" controlId="exampleForm.ControlTextarea1">
                        <Form.Label>Address Line</Form.Label>
                        <Form.Control as="textarea" rows={5} placeholder="Address Line" />
                    </Form.Group>

                    <Form.Group className="mb-4" controlId="exampleForm.ControlTextarea1">
                        <Form.Label>Country</Form.Label>
                        <Form.Select aria-label="Default select example" className='form-control'>
                            <option>Country</option>
                            <option value="1">United States</option>
                            <option value="2">Dubai</option>
                            <option value="3">London</option>
                            </Form.Select>
                    </Form.Group>

                    
                <Row>
                    <Col lg="6">
                    <Form.Group className="mb-4" controlId="formBasicEmail">
                            <Form.Label>Postal Code</Form.Label>
                            <Form.Select aria-label="Default select example" className='form-control'>
                            <option>Postal Code</option>
                            <option value="1">United States</option>
                            <option value="2">Dubai</option>
                            <option value="3">London</option>
                            </Form.Select>
                        </Form.Group>   
                    </Col>
                    <Col lg="6">
                        <Form.Group className="mb-4" controlId="formBasicEmail">
                            <Form.Label>Phone number</Form.Label>
                            <Form.Control type="tel" placeholder="Phone number" />
                        </Form.Group>
                    </Col>
                </Row>
                </div>
                <div className="billing__address mb-5">
                <h3 className='title'>Billing Address</h3>
                <a href="#" className='fs-4 same-as-shipping'><img src={path + rightIcon } className="img-fluid me-4" alt="Product image" />Same as shipping address</a>
                </div>
                </Form>
            </Col>
            <Col lg="4">
                <div className="checkout__mini__cart">
                <Table className='cart__table table-borderless'>

                    <tbody>
                        <tr className='cart__row align-middle'>
                        <td className='cart__img'>
                            <a href="" className='bg-white'><img src={path + productImg1 } className="img-fluid" alt="Product image" /></a>
                        </td>
                        <td className='cart__table__product'>
                            <h4>RAYBAN POLARIZED 3025</h4>
                            <strong><span className='me-1'>$</span>99</strong>
                            </td>
                        <td className='cart__td text-end'><span className="delete__cart__item">{deletIcon}</span></td>
                        </tr>

                        <tr className='cart__row align-middle'>
                        <td className='cart__img'>
                            <a href="" className='bg-white'><img src={path + productImg1 } className="img-fluid" alt="Product image" /></a>
                        </td>
                        <td className='cart__table__product'>
                            <h4>RAYBAN POLARIZED 3025</h4>
                            <strong><span className='me-1'>$</span>99</strong>
                            </td>
                        <td className='cart__td text-end'><span className="delete__cart__item">{deletIcon}</span></td>
                        </tr>

                        <tr className='cart__row align-middle'>
                        <td className='cart__img'>
                            <a href="" className='bg-white'><img src={path + productImg1 } className="img-fluid" alt="Product image" /></a>
                        </td>
                        <td className='cart__table__product'>
                            <h4>RAYBAN POLARIZED 3025</h4>
                            <strong><span className='me-1'>$</span>99</strong>
                            </td>
                        <td className='cart__td text-end'><span className="delete__cart__item">{deletIcon}</span></td>
                        </tr>

                   
                    </tbody>
                </Table>
                    <div className='d-grid'>
                                <button type="button" className="btn button mt-5">
                                Checkout        
                                </button>
                    </div>
                </div>
            </Col>
        </Row>
        </div>
        </Container>
    </>
  )
}

export default Checkout
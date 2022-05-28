import {React, useState } from 'react'
import { Col, Container, Row, Breadcrumb, Form, FloatingLabel, Button, Tabs, Tab, Nav, ListGroup, Card, Badge } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import MyAccountMenu from './MyAccountMenu/MyAccountMenu';


let path = process.env.PUBLIC_URL;
let accountBg= "/images/account-bg.png";
let eyeIcon= "/images/eye-icon.svg";
let alertIcon= "/images/alert-icon.svg";
let facebookIcon= "/images/facebook-icon.svg";
let googleIcon= "/images/google-icon.svg";


const MyAccount = () => {

  const [key, setKey] = useState('home');

  const [showShipping, setShowShipping] = useState(false);
  const [showBilling, setShowBilling] = useState(false);

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
        <div className='my__acount__wrapper gray__form'>
            <div>
                <div className='form__box '>
                <Tab.Container id="left-tabs-example" defaultActiveKey="Track-Order">
                  <Row>
                    <Col sm={2} className="my__account__left">
                      < MyAccountMenu />
                    </Col>
                    <Col sm={10} className="my__account__right ps-5">
                      <Tab.Content>
                        <Tab.Pane eventKey="Track-Order">
                        <div className='text-center login__top__row'>
                            <h3>Track Your Order</h3>
                            <p >Enter your order ID to know the status of the orders tracking.</p>
                        </div>
                        <Row>
                          <Col md={{ span: 6, offset: 3 }}>
                          <Form >
                          <Form.Floating>
                              <Form.Control
                              id="floatingInputCustom"
                              type="text"
                              placeholder="Your Order ID"
                              />
                              <label htmlFor="floatingInputCustom">Your Order ID</label>
                          </Form.Floating>
                          <div className='d-grid'>
                          <Button className="btn button" type="submit">
                          Track Order
                          </Button>
                          </div>
                        </Form>
                          </Col>
                        </Row>
                      
                        <div className="order__track__progress">
                          <div className="d-flex align-items-center mb-5 ps-5"><h4 className='text-uppercase m-0'>Order Track </h4> <span className='ms-4'>Order-3473732</span></div>
                          <Row className='order__track__progress__row pt-5'>
                            <Col className="text-center">
                              <div className="order__track__box complete">
                                <p>Delivered at warehouse</p>
                                <span>14/12/2022</span>
                              </div>
                            </Col>
                            <Col className="text-center">
                            <div className="order__track__box complete">
                            <p>Picked up from warehouse</p>
                              <span>14/12/2022</span>
                            </div>
                            </Col>
                            <Col className="text-center">
                            <div className="order__track__box complete big-circle">
                              <p>Delivered to Courier Service</p>
                              <span>14/12/2022</span>
                              </div>
                            </Col>
                            <Col className="text-center">
                            <div className="order__track__box in-complete">
                              <p>Picked up from courier service.</p>
                              <span>14/12/2022</span>
                              </div>
                            </Col>
                            <Col className="text-center">
                            <div className="order__track__box in-complete">
                              <p>Order delivered successfully.</p>
                              <span>14/12/2022</span>
                              </div>
                            </Col>
                          </Row>

                        </div>

                        </Tab.Pane>
                        <Tab.Pane eventKey="Order-History">
                        <div className='text-left login__top__row'>
                            <h3>Your Recent Orders</h3>
                            <p>Enter your order ID to know the status of the orders tracking.</p>
                        </div>
                        </Tab.Pane>
                        <Tab.Pane eventKey="Address-Book">
                        <div className='text-center login__top__row'>
                            <h3>Address Book</h3>
                            <p >The following addresses will be used on the checkout page by default.</p>
                        </div>
                        <Row className='edit-billing'>
                          <Col lg={6}>
                          <Card>
                              <Card.Header className='d-flex justify-content-between align-items-center'><h4>Billing address</h4> 
                              <Badge bg="default" pill onClick={() => setShowBilling(currentShow => !currentShow)}>Edit</Badge>
                              </Card.Header>
                              <ListGroup variant="flush">
                                <ListGroup.Item>Joan Vargas</ListGroup.Item>
                                <ListGroup.Item>Graves Gentry Traders</ListGroup.Item>
                                <ListGroup.Item>73 Oak Street</ListGroup.Item>
                                <ListGroup.Item>Rerum quibusdam nece</ListGroup.Item>
                                <ListGroup.Item>Elit facilis irure</ListGroup.Item>
                                <ListGroup.Item>Canada</ListGroup.Item>
                              </ListGroup>
                            </Card>
                          </Col>
                          <Col lg={6}>
                          <Card>
                              <Card.Header className='d-flex justify-content-between align-items-center'><h4>Shipping address</h4> 
                              <Badge bg="default" pill onClick={() => setShowShipping(currentShow => !currentShow)}>Edit</Badge>
                              </Card.Header>
                              <ListGroup variant="flush">
                                <ListGroup.Item>Joan Vargas</ListGroup.Item>
                                <ListGroup.Item>Graves Gentry Traders</ListGroup.Item>
                                <ListGroup.Item>73 Oak Street</ListGroup.Item>
                                <ListGroup.Item>Rerum quibusdam nece</ListGroup.Item>
                                <ListGroup.Item>Elit facilis irure</ListGroup.Item>
                                <ListGroup.Item>Canada</ListGroup.Item>
                              </ListGroup>
                            </Card>
                          </Col>
                        </Row>

                        { showShipping ? <Row>
                          <Form className='checkout__form'>
                <div className="shipping__address mb-5 mt-5">
                <h3 className='title'>Shipping Address</h3>
                <Form.Group className="mb-4" controlId="formBasicEmail">
                    <Form.Label>Email Address</Form.Label>
                    <Form.Control type="email" placeholder="Email address" />
                </Form.Group>
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
                <button type="button" class="btn button mt-4">Save Changes</button>
                </div>
                </Form>
                        </Row> : null }

                        { showBilling ? <Row>
                          <Form className='checkout__form'>
                <div className="shipping__address mb-5 mt-5">
                <h3 className='title'>Billing Address</h3>
                <Form.Group className="mb-4" controlId="formBasicEmail">
                    <Form.Label>Email Address</Form.Label>
                    <Form.Control type="email" placeholder="Email address" />
                </Form.Group>
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
                <button type="button" class="btn button mt-4">Save Changes</button>
                </div>
                </Form>
                        </Row> : null }
                        
                        </Tab.Pane>
                        <Tab.Pane eventKey="Account-Details">
                        
                        <Form className='checkout__form'>
                <div className="shipping__address mb-5">
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
                <Row>
                    <Col lg="6">
                      <Form.Group className="mb-4" controlId="formBasicEmail">
                          <Form.Label>Email Address</Form.Label>
                          <Form.Control type="email" placeholder="Email address" />
                      </Form.Group>
                    </Col>
                    <Col lg="6">
                        <Form.Group className="mb-4" controlId="formBasicEmail">
                            <Form.Label>Phone number</Form.Label>
                            <Form.Control type="tel" placeholder="Phone number" />
                        </Form.Group>
                    </Col>
                </Row>

                <div className="shipping__details mb-5 mt-4">
                <h3 className='title'>Password change</h3>
                  <Form.Group className="mb-4" controlId="formBasicPassword">
                      <Form.Label>Current password (leave blank to leave unchanged)</Form.Label>
                      <Form.Control type="password" placeholder="Current password" />
                  </Form.Group>
                  <Form.Group className="mb-4" controlId="formBasicPassword">
                      <Form.Label>New password (leave blank to leave unchanged)</Form.Label>
                      <Form.Control type="password" placeholder="New password" />
                  </Form.Group>
                  <Form.Group className="mb-4" controlId="formBasicPassword">
                      <Form.Label>Confirm new password</Form.Label>
                      <Form.Control type="password" placeholder="Confirm new password" />
                  </Form.Group>
                </div>
                <button type="button" class="btn button">Save Changes</button>
                </div>
                </Form>


                        </Tab.Pane>
                      </Tab.Content>
                    </Col>
                  </Row>
                </Tab.Container>
                </div>
       

            </div>

            
            
        </div>
    </Row>
    </div>
    </Container>
</>
  )
}

export default MyAccount
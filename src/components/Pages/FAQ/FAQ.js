import React from 'react'
import { Container, Row, Col, Breadcrumb, Accordion } from 'react-bootstrap'
import HomeCTAThree from '../../HomeCTAThree/HomeCTAThree'


let path = process.env.PUBLIC_URL;
let clientImg = "/images/client.png";
let shopBanner = "/images/shop-banner.png";
let homeCTABannerTwoImage = "/images/home-cta-banner-2.jpg";


const FAQ = () => {
  return (
    <>
    <Container>
    <Row>
           <Col>
            <div className="page__banner">
                 <Row className='align-items-center'>
                     <Col lg="9">
                        <h1 className='text-uppercase'>FAQS</h1>
                        <Breadcrumb>
                        <Breadcrumb.Item href="#">Home</Breadcrumb.Item>
                        <Breadcrumb.Item active>FAQs</Breadcrumb.Item>
                        </Breadcrumb>
                     </Col>
                     <Col lg="3"></Col>
                     <div className="my-account-banner-img"><img src={path + shopBanner } className="img-fluid" alt="Product image" /></div>
                 </Row>
             </div>
           </Col>
         </Row>

<section className="faqs__section">
<Accordion defaultActiveKey="0" flush>
  <Accordion.Item eventKey="0">
    <Accordion.Header>What’s the best way to contact Ludwin Dieter Customer service?</Accordion.Header>
    <Accordion.Body>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
    </Accordion.Body>
  </Accordion.Item>
  <Accordion.Item eventKey="1">
    <Accordion.Header>What’s the best way to contact Ludwin Dieter Customer service?</Accordion.Header>
    <Accordion.Body>
    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
    </Accordion.Body>
  </Accordion.Item>
  <Accordion.Item eventKey="2">
    <Accordion.Header>What’s the best way to contact Ludwin Dieter Customer service?</Accordion.Header>
    <Accordion.Body>
    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
    </Accordion.Body>
  </Accordion.Item>
  <Accordion.Item eventKey="3">
    <Accordion.Header>What’s the best way to contact Ludwin Dieter Customer service?</Accordion.Header>
    <Accordion.Body>
    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
    </Accordion.Body>
  </Accordion.Item>
  <Accordion.Item eventKey="4">
    <Accordion.Header>What’s the best way to contact Ludwin Dieter Customer service?</Accordion.Header>
    <Accordion.Body>
    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
    </Accordion.Body>
  </Accordion.Item>
  <Accordion.Item eventKey="5">
    <Accordion.Header>What’s the best way to contact Ludwin Dieter Customer service?</Accordion.Header>
    <Accordion.Body>
    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
    </Accordion.Body>
  </Accordion.Item>
</Accordion>
</section>

    < HomeCTAThree />
    </Container>
    </>
  )
}

export default FAQ
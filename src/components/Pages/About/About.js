import React from 'react'
import { Container, Row, Col, Breadcrumb, Accordion } from 'react-bootstrap'
import HomeCTAThree from '../../HomeCTAThree/HomeCTAThree'

let path = process.env.PUBLIC_URL;
let clientImg = "/images/client.png";
let shopBanner = "/images/shop-banner.png";
let homeCTABannerTwoImage = "/images/home-cta-banner-2.jpg";
let aboutImg = "/images/about-img.jpg";
let virtualImg = "/images/virtual-try-on-img.svg";



const About = () => {
  return (
    <>
      <Container>
      <Row>
           <Col>
            <div className="page__banner">
                 <Row className='align-items-center'>
                     <Col lg="9">
                        <h1 className='text-uppercase'>About Us</h1>
                        <Breadcrumb>
                        <Breadcrumb.Item href="#">Home</Breadcrumb.Item>
                        <Breadcrumb.Item active>About us</Breadcrumb.Item>
                        </Breadcrumb>
                     </Col>
                     <Col lg="3"></Col>
                     <div className="my-account-banner-img"><img src={path + shopBanner } className="img-fluid" alt="Product image" /></div>
                 </Row>
             </div>
           </Col>
         </Row>
<section className="about__section">

<Row  className='align-items-center about__row'>
          <Col lg={6}>
            <div className="about__content">
                <span>OUR MISSION</span>
                <h3 className='text-uppercase mb-4'>Virtaul try-on glasses designed for you...</h3>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
            </div>
          </Col>
          <Col lg={6}>
            <div className="about__img">
              <img src={path + aboutImg } className="img-fluid" alt="Product image" />
            </div>
          </Col>
         </Row>

         <Row className='align-items-center about__row'> 
          <Col lg={6}>
            <div className="about__img">
              <img src={path + aboutImg } className="img-fluid" alt="Product image" />
            </div>
          </Col>
          <Col lg={6}>
            <div className="about__content">
                <span>OUR MISSION</span>
                <h3 className='text-uppercase mb-4'>Virtaul try-on glasses designed for you...</h3>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
            </div>
          </Col>
         </Row>
</section>

<section className='virtual__try__on__section'>

  <div className="virtualTryOnCol text-center primary__content">
    <span>HOW IT WORKS?</span>
    <h3 className='text-uppercase mb-5 pb-3'>Virtaul try-on glasses designed<br /> for you...</h3>
    <img src={path + virtualImg } className="img-fluid" alt="Product image" />
  </div>

</section>

<section className="counter__section">
  <Row>
    <Col lg={2} md="4">
      <div className="counter__box text-center">
        <h3>09+</h3>
        <strong>Orders Delivered</strong>
      </div>
    </Col>
    <Col lg={2} md="4">
      <div className="counter__box text-center">
        <h3>09+</h3>
        <strong>Perimium Designs </strong>
      </div>
    </Col>
    <Col lg={2} md="4">
      <div className="counter__box text-center">
        <h3>33+</h3>
        <strong>Category Products</strong>
      </div>
    </Col>
    <Col lg={2} md="4">
      <div className="counter__box text-center">
        <h3>388+</h3>
        <strong>Happy Customers</strong>
      </div>
    </Col>
    <Col lg={2} md="4">
      <div className="counter__box text-center">
        <h3>33+</h3>
        <strong>Years In Business</strong>
      </div>
    </Col>
    <Col lg={2} md="4">
      <div className="counter__box text-center">
        <h3>33+</h3>
        <strong>Reviews On Google</strong>
      </div>
    </Col>
  </Row>
</section>

        < HomeCTAThree />
      </Container>
    </>
  )
}

export default About
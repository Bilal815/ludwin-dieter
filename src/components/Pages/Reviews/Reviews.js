import React, { useRef, useState } from "react";
import { Navigation, A11y } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import HomeCTATwo from '../../HomeCTATwo/HomeCTATwo'
import { Container, Breadcrumb, Col, Row } from 'react-bootstrap'
import HomeCTAThree from "../../HomeCTAThree/HomeCTAThree";


let path = process.env.PUBLIC_URL;
let clientImg = "/images/client.png";
let shopBanner = "/images/shop-banner.png";
let homeCTABannerTwoImage = "/images/home-cta-banner-2.jpg";

const Reviews = () => {
  return (
    <>


    <Container>
    <Row>
           <Col>
            <div className="page__banner">
                 <Row className='align-items-center'>
                     <Col lg="9">
                        <h1 className='text-uppercase'>Ludwin Dieter Reviews</h1>
                        <Breadcrumb>
                        <Breadcrumb.Item href="#">Home</Breadcrumb.Item>
                        <Breadcrumb.Item active>LWD-Reviews</Breadcrumb.Item>
                        </Breadcrumb>
                     </Col>
                     <Col lg="3"></Col>
                     <div className="my-account-banner-img"><img src={path + shopBanner } className="img-fluid" alt="Product image" /></div>
                 </Row>
             </div>
           </Col>
         </Row>

    <section className="testimonials pt-5">
      <Swiper navigation={true} modules={[Navigation]} spaceBetween={30}  className="testimonial__Swiper pt-5">
        <SwiperSlide >
            <div className="testimonial__col text-center">
                <img src={path + clientImg } alt="Product image" />
                <p className="text-muted">Tanahair is the friendliest and most efficient company I have ever used. The whole thing takes time to introduce the product and as a result puts forward only the best opportunities that really suit you. they help from start to finish to create a great product identity for your company</p>
                <h5>Shalima Hayden</h5>
                <span className="text-muted">Product Designer</span>
            </div>
        </SwiperSlide>
        <SwiperSlide >
            <div className="testimonial__col text-center">
                <img src={path + clientImg } alt="Product image" />
                <p className="text-muted">Tanahair is the friendliest and most efficient company I have ever used. The whole thing takes time to introduce the product and as a result puts forward only the best opportunities that really suit you. they help from start to finish to create a great product identity for your company</p>
                <h5>Shalima Hayden</h5>
                <span className="text-muted">Product Designer</span>
            </div>
        </SwiperSlide>
      </Swiper>
     </section>
  
    < HomeCTAThree />
   
    </Container>
    </>
  )
}

export default Reviews
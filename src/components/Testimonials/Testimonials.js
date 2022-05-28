import React, { useRef, useState } from "react";
import { Navigation, A11y } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';


let path = process.env.PUBLIC_URL;
let clientImg = "/images/client.png";

const Testimonials = () => {
  return (
    <>
     <section className="testimonials">
      <h4 className="text-center testimonial__title">What Our Customer Says</h4>
      <Swiper navigation={true} modules={[Navigation]} spaceBetween={30}  className="testimonial__Swiper">
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
    </>
  )
}

export default Testimonials
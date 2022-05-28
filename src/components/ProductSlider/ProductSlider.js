import React, { useRef, useState } from "react";
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import "swiper/css/free-mode";
import 'swiper/css/navigation';
import "swiper/css/thumbs";

import { FreeMode, A11y, Thumbs } from "swiper";


let path = process.env.PUBLIC_URL;
let singleProductImg = "/images/single-product-img.png";


const ProductSlider = () => {

    const [thumbsSwiper, setThumbsSwiper] = useState(null);
    return (
        <>
        <Swiper
            onSwiper={setThumbsSwiper}
            spaceBetween={20}
            slidesPerView={4}
            freeMode={true}
            direction= {'vertical'}
            mousewheel={{
                releaseOnEdges: true,
                }}
            watchSlidesProgress={true}
            modules={[FreeMode, Thumbs, A11y]}
            breakpoints={{
              320: {
                direction: 'horizontal',
                slidesPerView: 3
              },
              768: {
                direction: 'horizontal',
                slidesPerView: 3
              },
              1024: {
                direction: 'vertical',
                slidesPerView: 4
              },
            }}
            className="product__thumbnail"
          >
            <SwiperSlide>
            <img src={path + singleProductImg } />
            </SwiperSlide>
            <SwiperSlide>
            <img src={path + singleProductImg } />
            </SwiperSlide>
            <SwiperSlide>
            <img src={path + singleProductImg } />
            </SwiperSlide>
            <SwiperSlide>
            <img src={path + singleProductImg } />
            </SwiperSlide>
            <SwiperSlide>
            <img src={path + singleProductImg } />
            </SwiperSlide>
            <SwiperSlide>
            <img src={path + singleProductImg } />
            </SwiperSlide>
            <SwiperSlide>
            <img src={path + singleProductImg } />
            </SwiperSlide>
            <SwiperSlide>
            <img src={path + singleProductImg } />
            </SwiperSlide>
            <SwiperSlide>
            <img src={path + singleProductImg } />
            </SwiperSlide>
            <SwiperSlide>
            <img src={path + singleProductImg } />
            </SwiperSlide>
          </Swiper>
          <Swiper
            spaceBetween={0}
            watchOverflow = {true}
            watchSlidesVisibility = {true}
            watchSlidesProgress = {true}
            preventInteractionOnTransition = {true}
            effect={"fade"}
            fadeEffect={{
            crossFade: true,
            }}
            thumbs={{ swiper: thumbsSwiper }}
            modules={[FreeMode, Thumbs, A11y]}
            className="product__big__thumbnails"
          >
            <SwiperSlide>
            <img src={path + singleProductImg } />
            </SwiperSlide>
            <SwiperSlide>
            <img src={path + singleProductImg } />
            </SwiperSlide>
            <SwiperSlide>
            <img src={path + singleProductImg } />
            </SwiperSlide>
            <SwiperSlide>
            <img src={path + singleProductImg } />
            </SwiperSlide>
            <SwiperSlide>
            <img src={path + singleProductImg } />
            </SwiperSlide>
            <SwiperSlide>
            <img src={path + singleProductImg } />
            </SwiperSlide>
            <SwiperSlide>
            <img src={path + singleProductImg } />
            </SwiperSlide>
            <SwiperSlide>
            <img src={path + singleProductImg } />
            </SwiperSlide>
            <SwiperSlide>
            <img src={path + singleProductImg } />
            </SwiperSlide>
            <SwiperSlide>
            <img src={path + singleProductImg } />
            </SwiperSlide>
          </Swiper>
        </>
      );
 
}

export default ProductSlider
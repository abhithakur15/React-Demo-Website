import Cust1 from "./../assets/testimonials-1-img-1.png";
import Cust2 from "./../assets/testimonials-1-img-2.png";
import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';



// import required modules
import { Autoplay } from 'swiper/modules';

export default function Testimonial() {
  return (
    <>
      <Swiper
  
     
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        spaceBetween={50}
        slidesPerView={2}
        loop={true}
   
        modules={[Autoplay]}
        breakpoints={{
          320: {
            slidesPerView: 1,
            spaceBetween: 0,
          },
          768: {
            slidesPerView: 1,
            spaceBetween: 0,
          },
          1024: {
            slidesPerView: 2,
            spaceBetween: 50,
          },
        }}
        className="mySwiper"
      >
  <SwiperSlide>
          <div className="box-a">
            <p>
              This is due to their excellent service, competitive pricing and
              customer support. It’s throughly refresing to get such a personal
              touch.
            </p>
            <div className="image-box text-center">
              <img src={Cust1} alt="" />
            </div>
          </div>
        </SwiperSlide>

        <SwiperSlide>
          <div className="box-b">
            <p>
              This is due to their excellent service, competitive pricing and
              customer support. It’s throughly refresing to get such a personal
              touch.
            </p>
            <div className="image-box text-center">
              <img src={Cust2} alt="" />
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="box-a">
            <p>
              This is due to their excellent service, competitive pricing and
              customer support. It’s throughly refresing to get such a personal
              touch.
            </p>
            <div className="image-box text-center">
              <img src={Cust1} alt="" />
            </div>
          </div>
        </SwiperSlide>

        <SwiperSlide>
          <div className="box-b">
            <p>
              This is due to their excellent service, competitive pricing and
              customer support. It’s throughly refresing to get such a personal
              touch.
            </p>
            <div className="image-box text-center">
              <img src={Cust2} alt="" />
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </>
  );
}

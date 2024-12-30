
import shot1 from "./../assets/app-shot-n-1-1.png";
import shot2 from "./../assets/app-shot-n-1-2.png";
import shot3 from "./../assets/app-shot-n-1-3.png";
import shot4 from "./../assets/app-shot-n-1-4.png";
import shot5 from "./../assets/app-shot-n-1-5.png";
import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';



// import required modules
import {  Autoplay } from 'swiper/modules';

export default function Screenshoot() {
  return (
    <>
      <Swiper
        slidesPerView={1}
        spaceBetween={10}
        pagination={{
          clickable: true,
        }}
        autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
             modules={[Autoplay]}
             loop={true}
        breakpoints={{
          640: {
            slidesPerView: 2,
            spaceBetween: 20,
          },
          768: {
            slidesPerView: 2,
            spaceBetween: 20,
          },
          1024: {
            slidesPerView: 5,
            spaceBetween: 10,
          },
        }}

        className="mySwiper"
      >
        <SwiperSlide>
            <div className="shot-box">
                <img src={shot1} alt="" className="img-fluid"/>
            </div>
            </SwiperSlide>
            <SwiperSlide>
            <div className="shot-box">
                <img src={shot2} alt="" className="img-fluid" />
            </div>
            </SwiperSlide>
            <SwiperSlide>
            <div className="shot-box">
                <img src={shot3} alt="" className="img-fluid"  />
            </div>
            </SwiperSlide>
            <SwiperSlide>
            <div className="shot-box">
                <img src={shot4} alt="" className="img-fluid" />
            </div>
            </SwiperSlide>
            <SwiperSlide>
            <div className="shot-box">
                <img src={shot5} alt="" className="img-fluid" />
            </div>
            </SwiperSlide>
            <SwiperSlide>
            <div className="shot-box">
                <img src={shot1} alt="" className="img-fluid" />
            </div>
            </SwiperSlide>
            <SwiperSlide>
            <div className="shot-box">
                <img src={shot2} alt="" className="img-fluid" />
            </div>
            </SwiperSlide>
            <SwiperSlide>
            <div className="shot-box">
                <img src={shot3} alt="" className="img-fluid" />
            </div>
            </SwiperSlide>
            <SwiperSlide>
            <div className="shot-box">
                <img src={shot4} alt="" className="img-fluid" />
            </div>
            </SwiperSlide>
            <SwiperSlide>
            <div className="shot-box">
                <img src={shot5} alt="" className="img-fluid" />
            </div>
            </SwiperSlide>
      </Swiper>
    </>
  );
}

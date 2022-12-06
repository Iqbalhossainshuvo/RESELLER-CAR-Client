import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import "./carousel.css";

import img from '../../../Assets/slider/bannerImg1.jpg'
import img2 from '../../../Assets/slider/bannerImg2.jpg'
import img3 from '../../../Assets/slider/bannerImg3.jpg'

import img4 from '../../../Assets/slider/bannerImg4.jpg'
import img5 from '../../../Assets/slider/bannerImg5.jpg'




// import required modules
import { Autoplay, Pagination, Navigation } from "swiper";

export default function App() {
  return (
    <>
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper"
      >
        <SwiperSlide >
            <img  src={img} className="" alt="" />
        </SwiperSlide>
        <SwiperSlide>
            <img src={img2} alt="" />
        </SwiperSlide>
        <SwiperSlide>
            <img src={img3} alt="" />
        </SwiperSlide>
      
        <SwiperSlide>
            <img src={img4} alt="" />
        </SwiperSlide>
      
        <SwiperSlide>
            <img src={img5} alt="" />
        </SwiperSlide>
       
      
      </Swiper>
    </>
  );
}

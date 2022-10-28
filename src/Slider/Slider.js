import React from "react";
import { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

// import required modules
import { EffectCoverflow, Pagination } from "swiper";
import slide1 from "./../images/Sajek.png";
import slide2 from "./../images/Sreemongol.png";
import slide3 from "./../images/sundorbon.png";

const Slider = () => {
  return (
    <>
      <Swiper
        effect={"coverflow"}
        grabCursor={true}
        centeredSlides={true}
        slidesPerView={"auto"}
        coverflowEffect={{
          rotate: 260,
          stretch: 100,
          depth: 100,
          modifier: 1,
          slideShadows: true,
        }}
        pagination={true}
        modules={[EffectCoverflow, Pagination]}
        className="mySwiper"
      >
        <SwiperSlide>
          <img src={slide1} alt="" style={{ height: "416px" }} />
        </SwiperSlide>
        <SwiperSlide>
          <img src={slide2} alt="" style={{ height: "416px" }} />
        </SwiperSlide>
        <SwiperSlide>
          <img src={slide3} alt="" style={{ height: "416px" }} />
        </SwiperSlide>
      </Swiper>
    </>
  );
};

export default Slider;

import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";

// import required modules
import { FreeMode, Pagination } from "swiper";
import slide1 from ".././images/Sajek.png";
import slide2 from ".././images/Sreemongol.png";
import slide3 from ".././images/Sajek.png";
import slide4 from ".././images/Sajek.png";
import slide5 from ".././images/Sajek.png";
import slide6 from ".././images/Sajek.png";

const TourGallery = () => {
  return (
    <div>
      <div className="stat-value text-primary">
        Glimps of our Best Adventures
      </div>
      <Swiper
        slidesPerView={5}
        spaceBetween={3}
        freeMode={true}
        pagination={{
          clickable: true,
        }}
        modules={[FreeMode, Pagination]}
        className="mySwiper"
      >
        <SwiperSlide>
          {" "}
          <img src={slide1} alt="" className="h-96" />
        </SwiperSlide>
        <SwiperSlide>
          {" "}
          <img src={slide2} alt="" className="h-96" />
        </SwiperSlide>
        <SwiperSlide>
          {" "}
          <img src={slide3} alt="" className="h-96" />
        </SwiperSlide>
        <SwiperSlide>
          {" "}
          <img src={slide4} alt="" className="h-96" />
        </SwiperSlide>
        <SwiperSlide>
          {" "}
          <img src={slide5} alt="" className="h-96" />
        </SwiperSlide>
        <SwiperSlide>
          {" "}
          <img src={slide6} alt="" className="h-96" />
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default TourGallery;

import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";
import "swiper/css/navigation";

// import required modules
import { FreeMode, Pagination, Navigation } from "swiper";
import { destinationGallery } from "../utils/content";

const ChevronIcon = ({ direction = "left" }) => (
  <svg
    viewBox="0 0 24 24"
    className="h-5 w-5"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d={direction === "left" ? "M15 6l-6 6 6 6" : "M9 6l6 6-6 6"} />
  </svg>
);

const TourGallery = () => {
  const [prevEl, setPrevEl] = useState(null);
  const [nextEl, setNextEl] = useState(null);

  return (
    <section className="bg-ink px-4 py-20 sm:px-6 lg:px-10">
      <div className="mx-auto max-w-7xl">
        <div className="mx-auto max-w-xl text-center">
          <span className="text-xs font-bold uppercase tracking-widest text-coral-400">
            Gallery
          </span>
          <h2 className="mt-3 font-display text-3xl font-semibold text-sand sm:text-4xl">
            A Glimpse of Our Best Adventures
          </h2>
          <p className="mt-3 text-sm text-sand/60 sm:text-base">
            Real places, real trips — a peek at where our travellers have
            already been.
          </p>
        </div>

        <div className="relative mt-14">
          <Swiper
            slidesPerView={1.2}
            spaceBetween={20}
            freeMode={true}
            navigation={{ prevEl, nextEl }}
            pagination={{ clickable: true }}
            breakpoints={{
              640: { slidesPerView: 2.2, spaceBetween: 24 },
              1024: { slidesPerView: 4, spaceBetween: 24 },
            }}
            modules={[FreeMode, Pagination, Navigation]}
            className="!pb-14"
          >
            {destinationGallery.map((item) => (
              <SwiperSlide key={item.label}>
                <div className="group relative h-96 overflow-hidden rounded-3xl shadow-card">
                  <img
                    src={item.image}
                    alt={item.label}
                    className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-ink/85 via-ink/10 to-transparent" />
                  <p className="absolute bottom-5 left-5 font-display text-lg font-semibold text-sand">
                    {item.label}
                  </p>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>

          <button
            type="button"
            ref={setPrevEl}
            aria-label="Previous slide"
            className="absolute left-0 top-[42%] z-10 hidden -translate-x-4 -translate-y-1/2 h-11 w-11 items-center justify-center rounded-full border border-sand/20 bg-ink/60 text-sand backdrop-blur-sm transition-colors duration-300 hover:bg-coral-500 hover:border-coral-500 lg:flex"
          >
            <ChevronIcon direction="left" />
          </button>
          <button
            type="button"
            ref={setNextEl}
            aria-label="Next slide"
            className="absolute right-0 top-[42%] z-10 hidden translate-x-4 -translate-y-1/2 h-11 w-11 items-center justify-center rounded-full border border-sand/20 bg-ink/60 text-sand backdrop-blur-sm transition-colors duration-300 hover:bg-coral-500 hover:border-coral-500 lg:flex"
          >
            <ChevronIcon direction="right" />
          </button>
        </div>
      </div>
    </section>
  );
};

export default TourGallery;

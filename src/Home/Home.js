import React from "react";
import Hero from "../Hero/Hero";
import Slider from "../Slider/Slider";
import background from "../images/coxbg.png";
import Service from "../Services/Service/Service";
import AllServices from "../Services/AllServices/AllServices";
import TourGallery from "../TourGallery/TourGallery";
import Review from "../Review/Review";
import Special from "../SpecialOffer/Special";
const Home = () => {
  return (
    <div>
      <div
        className="hero min-h-screen"
        style={{ backgroundImage: `url(${background})` }}
      >
        <div className="hero-overlay bg-opacity-60"></div>
        <div className="hero-content flex-col ml-16 lg:flex-row-reverse">
          <Slider></Slider>

          <div className="lg:ml-48">
            <h1 className="text-5xl font-bold">Tour D Travellers!</h1>
            <p className="py-6 ">
              Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
              excepturi exercitationem quasi. In deleniti eaque aut repudiandae
              et a id nisi.
            </p>
            <button to="/booking" className="btn btn-primary">
              Book Now
            </button>
          </div>
        </div>
      </div>
      <Special />
      <AllServices />
      <TourGallery />
    </div>
  );
};

export default Home;

import React from "react";
import Hero from "../Hero/Hero";
import AllServices from "../Services/AllServices/AllServices";
import TourGallery from "../TourGallery/TourGallery";
import Special from "../SpecialOffer/Special";
const Home = () => {
  return (
    <div>
      <Hero />
      <Special />
      <AllServices />
      <TourGallery />
    </div>
  );
};

export default Home;

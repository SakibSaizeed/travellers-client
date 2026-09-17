import React from "react";
import Hero from "../Hero/Hero";
import AllServices from "../Services/AllServices/AllServices";
import TourGallery from "../TourGallery/TourGallery";
import Special from "../SpecialOffer/Special";
import Features from "../Features/Features";
import Testimonials from "../Review/Review";
const Home = () => {
  return (
    <div>
      <Hero />
      <Special />
      <AllServices />
      <Features />
      <TourGallery />
      <Testimonials />
    </div>
  );
};

export default Home;

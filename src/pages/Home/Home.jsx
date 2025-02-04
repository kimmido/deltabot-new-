import React, { useRef } from "react";
import Slide from "./components/Slide";
import BusinessSection from "./components/BusinessSection";
import VideoSwiper from "./components/VideoSwiper";

const Home = () => {
  return (
    <div className="Home">
      <Slide />
      <BusinessSection />
      <VideoSwiper />
    </div>
  );
};

export default Home;

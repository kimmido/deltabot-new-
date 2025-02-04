import React, { useRef } from "react";
import Slide from "./components/Slide";
import BusinessSection from "./components/BusinessSection";
import VideoSwier from "./components/VideoSwier";

const Home = () => {
  return (
    <div className="Home">
      <Slide />
      <BusinessSection />
      <VideoSwier />
    </div>
  );
};

export default Home;

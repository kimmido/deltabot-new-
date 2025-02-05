import React from "react";
import BannerSwiper from "./components/bannerSwiper";
import BusinessSection from "./components/BusinessSection";
import VideoSwiper from "./components/VideoSwiper";

const Home = () => {
  return (
    <div className="Home">
      <BannerSwiper />
      <BusinessSection />
      <VideoSwiper />
    </div>
  );
};

export default Home;

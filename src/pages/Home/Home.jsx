import React, { useRef } from "react";
import Slide from "./components/Slide";
import BusinessSection from "./components/BusinessSection";
import Videos from "./components/Videos";

const Home = () => {
  return (
    <div className="Home">
      <Slide />
      <BusinessSection />
      <Videos />
    </div>
  );
};

export default Home;

import React, { useRef } from "react";
import BannerSwiper from "./components/BannerSwiper";
import BusinessSection from "./components/BusinessSection";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import VideoSection from "./components/VideoSection";
import SolutionSection from "./components/SolutionSection";
import PopupManager from "../../components/UI/PopupManager";
gsap.registerPlugin(useGSAP);

const Home = () => {
  const gsapContainer = useRef(null);

  useGSAP(
    () => {
      gsap.to(".decorative-txt", {
        scrollTrigger: {
          trigger: ".decorative-txt",
          start: "bottom 90%",
          end: "center 48%",
          scrub: 1, // 스크롤에 따라 부드럽게
          markers: false,
        },
        backgroundSize: "100%",
        ease: "none",
      });
    },
    { scope: gsapContainer },
  );

  return (
    <>
      <div className="Home">
        <PopupManager />
        <BannerSwiper />
        <div className="container">
          <div className="decorative-area" ref={gsapContainer}>
            <p className="decorative-txt">산업을 혁신하는 지능형 시스템.</p>
          </div>
        </div>
        <BusinessSection />
        <SolutionSection />
        <VideoSection />
      </div>
    </>
  );
};

export default Home;

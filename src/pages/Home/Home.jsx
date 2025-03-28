import React, { useRef } from "react";
import BannerSwiper from "./components/BannerSwiper";
import BusinessSection from "./components/BusinessSection";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import VideoSection from "./components/VideoSection";
import MetaTag from "../../components/Shared/MetaTag";
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
    { scope: gsapContainer }
  );

  return (
    <>
      {/* <MetaTag
        title="deltabot | 델타봇"
        description="산업용 자동화 기기 전문 제조 및 판매 업체"
        keywords="델타봇, 로봇, 자동화, 비전시스템, 재활용시스템"
        imgsrc="https://icpmalldata.mycafe24.com/images/og.jpg"
        url="https://icpmalldata.mycafe24.com/"
      /> */}
      <div className="Home">
        <BannerSwiper />
        <div className="container">
          <div className="decorative-area" ref={gsapContainer}>
            <p className="decorative-txt">델타봇은</p>
            <p className="decorative-txt">로봇산업의 선두 주자로</p>
            <p className="decorative-txt">발돋움해 나갈 것 입니다.</p>
          </div>
        </div>
        <BusinessSection />
        <VideoSection />
      </div>
    </>
  );
};

export default Home;

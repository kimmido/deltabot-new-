import React, { useRef } from "react";
import Header from "../../components/Layout/Header";
import Footer from "../../components/Layout/Footer";
import Slide from "./components/Slide";
import BusinessCard from "./components/BusinessCard";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import ScrollTrigger from "gsap/ScrollTrigger";

gsap.registerPlugin(useGSAP, ScrollTrigger);

const Home = () => {
  const gsapContainer = useRef(null);

  useGSAP(
    () => {
      gsap.to(".decorative-txt", {
        scrollTrigger: {
          trigger: ".decorative-txt",
          start: "bottom 90%",
          end: "center 30%",
          scrub: 1, // 스크롤에 따라 부드럽게
          markers: false,
        },
        backgroundSize: "100%",
        ease: "none",
      });
    },
    { scope: gsapContainer }
  );
  console.log(gsapContainer.current);

  return (
    <div className="Home">
      <Header />
      <Slide />
      <div className="container">
        <div className="decorative-area" ref={gsapContainer}>
          <p className="decorative-txt">델타봇은</p>
          <p className="decorative-txt">로봇산업의 선두 주자로</p>
          <p className="decorative-txt">발돋움해 나갈 것 입니다.</p>
        </div>

        <section className="business-section">
          <h2>사업소개</h2>
          <div className="business__card-grid">
            <BusinessCard position={"pos1"} />
            <BusinessCard position={"pos2"} />
            <BusinessCard position={"pos3"} />
            <BusinessCard position={"pos4"} />
          </div>
        </section>
      </div>
      <Footer />
    </div>
  );
};

export default Home;

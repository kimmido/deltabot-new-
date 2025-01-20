import React, { useRef } from "react";
import Slide from "./components/Slide";
import BusinessSection from "./components/BusinessSection";
import Videos from "./components/Videos";

const Home = () => {
  // const gsapContainer = useRef(null);

  // useGSAP(
  //   () => {
  //     gsap.to(".decorative-txt", {
  //       scrollTrigger: {
  //         trigger: ".decorative-txt",
  //         start: "bottom 90%",
  //         end: "center 30%",
  //         scrub: 1, // 스크롤에 따라 부드럽게
  //         markers: false,
  //       },
  //       backgroundSize: "100%",
  //       ease: "none",
  //     });
  //   },
  //   { scope: gsapContainer }
  // );

  return (
    <div className="Home">
      {/* <Header /> */}
      <Slide />
      {/* <div className="decorative-area" ref={gsapContainer}>
          <p className="decorative-txt">델타봇은</p>
          <p className="decorative-txt">로봇산업의 선두 주자로</p>
          <p className="decorative-txt">발돋움해 나갈 것 입니다.</p>
        </div> */}
      <BusinessSection />
      <Videos />
      {/* <Footer /> */}
    </div>
  );
};

export default Home;

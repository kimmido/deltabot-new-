import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import ScrollTrigger from "gsap/ScrollTrigger";
gsap.registerPlugin(useGSAP, ScrollTrigger);

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import main_slide from "../../../assets/images/main_slide(1).jpg";

function Slide() {
  useGSAP(() => {
    gsap.from(".home__swiper", {
      duration: 0.8,
      yPercent: 110, // 시작 위치를 아래에서 시작
      scale: 0.5,
      // opacity: 0,
      ease: "power2.out",
    });

    gsap.to(".home__swiper-wrap", {
      scrollTrigger: {
        trigger: ".home__swiper-wrap",
        start: "top 80px", // 요소의 top이 viewport 중앙에 왔을 때
        end: "bottom 50%",
        scrub: 1, // 스크롤에 따라 부드럽게
        markers: false,
      },
      scale: 0.92,
    });
  });

  return (
    <div className="home__swiper-wrap">
      <Swiper
        className="home__swiper"
        modules={[Autoplay, Pagination, Navigation]}
        loop={true}
        pagination={{
          type: "fraction",
          clickable: true,
        }}
        navigation={true}
        speed={800}
        autoplay={{
          delay: 6000,
          disableOnInteraction: false,
        }}
        spaceBetween={0}
        slidesPerView={1}
      >
        <SwiperSlide>
          <img src={main_slide} alt="메인슬라이드1" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={main_slide} alt="메인슬라이드2" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={main_slide} alt="메인슬라이드3" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={main_slide} alt="메인슬라이드4" />
        </SwiperSlide>
        <strong className="slide__text">
          Recycling robot system
          <br />& Automation
        </strong>
      </Swiper>
    </div>
  );
}

export default Slide;

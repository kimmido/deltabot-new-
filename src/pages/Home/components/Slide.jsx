import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import ScrollTrigger from "gsap/ScrollTrigger";
gsap.registerPlugin(useGSAP, ScrollTrigger);

import "swiper/scss";
import "swiper/scss/pagination";
import "swiper/scss/navigation";

import main_slide1 from "../../../assets/images/home/main_slide(1).jpg";
import main_slide2 from "../../../assets/images/home/main_slide(2).jpg";
import main_slide3 from "../../../assets/images/home/main_slide(3).jpg";
import main_slide4 from "../../../assets/images/home/main_slide(4).jpg";

function Slide() {
  const images = [
    { src: main_slide1, alt: "메인배너1" },
    { src: main_slide2, alt: "메인배너2" },
    { src: main_slide3, alt: "메인배너3" },
    { src: main_slide4, alt: "메인배너4" },
  ];

  useGSAP(() => {
    gsap.from(".home__swiper", {
      duration: 0.8,
      yPercent: 110, // 시작 위치를 아래에서 시작
      scale: 0.5,
      // opacity: 0,
      ease: "power2.out",
    });

    gsap.to(".home__swiper-wrap", {
      scale: 0.92,
      scrollTrigger: {
        trigger: ".home__swiper-wrap",
        start: "top 80px", // 요소의 top이 viewport 중앙에 왔을 때
        end: "bottom 50%",
        scrub: 1, // 스크롤에 따라 부드럽게
        markers: false,
      },
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
        {images.map((img) => (
          <SwiperSlide key={img.alt}>
            <img src={img.src} alt={img.alt} />
          </SwiperSlide>
        ))}
        <strong className="slide__text">
          Recycling robot system
          <br />& Automation
        </strong>
      </Swiper>
    </div>
  );
}

export default Slide;

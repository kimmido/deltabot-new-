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

import img1 from "../../../assets/images/main/main_slide(1).jpg";
import img2 from "../../../assets/images/main/main_slide(2).jpg";
import img3 from "../../../assets/images/main/main_slide(3).jpg";
import img4 from "../../../assets/images/main/main_slide(4).jpg";
import img5 from "../../../assets/images/main/main_slide(5).jpg";

function BannerSwiper() {
  const slideData = [
    {
      text1: "ROBOT AUTOMATION",
      text2: "사람과 AI 기술이 함께하는 미래",
      img: img1,
    },
    {
      text1: "VISION SYSTEM",
      text2: "사람과 AI 기술이 함께하는 미래",
      img: img2,
    },
    {
      text1: "RECYCLING SYSTEM",
      text2: "사람과 AI 기술이 함께하는 미래",
      img: img3,
    },
    {
      text1: "MEDICAL",
      text2: "사람과 AI 기술이 함께하는 미래",
      img: img4,
    },
    {
      text1: "INFORMATION TECHNOLOGY",
      text2: "사람과 AI 기술이 함께하는 미래",
      img: img5,
    },
  ];

  useGSAP(() => {
    gsap.from(".BannerSwiper__swiper", {
      duration: 0.8,
      yPercent: 110, // 시작 위치를 아래에서 시작
      scale: 0.5,
      ease: "power2.out",
    });

    gsap.to(".BannerSwiper", {
      scale: 0.92,
      scrollTrigger: {
        trigger: ".BannerSwiper",
        start: "top 80px", // 요소의 top이 viewport 중앙에 왔을 때
        end: "bottom 30%",
        scrub: 1, // 스크롤에 따라 부드럽게
        markers: false,
      },
    });
  });

  return (
    <div className="BannerSwiper">
      <Swiper
        className="BannerSwiper__swiper"
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
        spaceBetween={24}
        slidesPerView={1}
      >
        {slideData.map((item, idx) => (
          <SwiperSlide key={item.text1}>
            <div
              className={`slide slide--${idx}`}
              style={{ backgroundImage: `url("${item.img}")` }}
            >
              <div className="slide__text">
                <p className="text">{item.text1}</p>
                <strong className="text">{item.text2}</strong>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}

export default BannerSwiper;

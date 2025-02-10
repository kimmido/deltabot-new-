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

// import main_slide1 from "../../../assets/images/home/main_slide(1).jpg";
// import main_slide2 from "../../../assets/images/home/main_slide(2).jpg";
// import main_slide3 from "../../../assets/images/home/main_slide(3).jpg";
// import main_slide4 from "../../../assets/images/home/main_slide(4).jpg";

function BannerSwiper() {
  const slideData = [
    {
      alt: "메인배너1",
      text1: "자동화",
    },
    {
      alt: "메인배너2",
      text1: "재활용",
    },
    {
      alt: "메인배너3",
      text1: "의료",
    },
    {
      alt: "메인배너4",
      text1: "IT",
    },
  ];

  useGSAP(() => {
    gsap.from(".home__swiper", {
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
        spaceBetween={0}
        slidesPerView={1}
      >
        {slideData.map((item, idx) => (
          <SwiperSlide key={item.alt}>
            <div className={`slide slide--${idx}`}>
              <strong className="slide__text">
                {item.text1}
                <br />
                {item.text2}
              </strong>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}

export default BannerSwiper;

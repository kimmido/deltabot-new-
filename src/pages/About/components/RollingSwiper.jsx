import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import { category } from "../../../data/category";
import RollingSlideItem from "./RollingSlideItem";

import "swiper/scss";
import "swiper/scss/autoplay";
import businessImg1 from "../../../assets/images/about/slide(1).jpg";
import businessImg2 from "../../../assets/images/about/slide(2).jpg";
import businessImg3 from "../../../assets/images/about/slide(3).jpg";
import businessImg4 from "../../../assets/images/about/slide(4).jpg";
import businessImg5 from "../../../assets/images/about/slide(5).jpg";
import businessImg6 from "../../../assets/images/about/slide(6).jpg";

function LoopSwiper() {
  const routeBusiness = category.find((item) => item.main.label == "사업소개");
  const businessSub = routeBusiness.sub;

  const businessImg = [
    businessImg1,
    businessImg2,
    businessImg3,
    businessImg4,
    businessImg5,
    businessImg6,
  ];

  return (
    <div className="LoopSwiper">
      <Swiper
        modules={[Autoplay]}
        loop={true}
        speed={8000}
        autoplay={{
          delay: 0,
          disableOnInteraction: false,
        }}
        slidesPerView={2}
        spaceBetween={8}
        breakpoints={{
          768: {
            slidesPerView: 3,
            spaceBetween: 24,
          },
          1281: {
            slidesPerView: 4,
            spaceBetween: 24,
          },
        }}
      >
        {businessSub.map((item, idx) => (
          <SwiperSlide key={item.label}>
            <RollingSlideItem
              src={businessImg[idx]}
              alt={item.label}
              caption={item.label}
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}

export default LoopSwiper;

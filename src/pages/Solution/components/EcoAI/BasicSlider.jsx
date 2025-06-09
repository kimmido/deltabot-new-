import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";

import "swiper/css/navigation";
import "swiper/css";

const BasicSlider = ({ slides = [] }) => {
  return (
    <Swiper
      className="BasicSlider__swiper"
      modules={[Navigation]}
      navigation={true}
      spaceBetween={20}
      slidesPerView={1}
    >
      {slides.map((item, index) => (
        <SwiperSlide key={index}>
          <div className="slide-item">{item}</div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default BasicSlider;

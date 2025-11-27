import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation } from "swiper/modules";

import "swiper/css/autoplay";
import "swiper/css/navigation";
import "swiper/css";

const BasicSlider = ({ slides = [], ...setting }) => {
  return (
    <Swiper
      className="BasicSlider__swiper"
      modules={[Navigation, Autoplay]}
      navigation={true}
      spaceBetween={20}
      slidesPerView={1}
      {...setting}
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

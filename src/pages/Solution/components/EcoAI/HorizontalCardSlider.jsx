import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation } from "swiper/modules";

import "swiper/scss";
import "swiper/css/navigation";

function HorizontalCardSlider({ slideData }) {
  return (
    <div className="HorizontalCardSlider">
      <Swiper
        className="HorizontalCardSlider__swiper"
        modules={[Autoplay, Navigation]}
        // loop={true}
        navigation={true}
        speed={800}
        autoplay={{
          delay: 6000,
          disableOnInteraction: false,
        }}
        slidesPerView={2.5}
        spaceBetween={16}
        breakpoints={{
          769: {
            slidesPerView: 4,
            spaceBetween: 24,
          },
        }}
      >
        {slideData.map((item, idx) => (
          <SwiperSlide key={item.text}>
            <img src={item.src} alt={item.text} />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}

export default HorizontalCardSlider;

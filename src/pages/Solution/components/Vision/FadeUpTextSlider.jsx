import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation } from "swiper/modules";

import "swiper/scss";
import "swiper/css/navigation";

function FadeUpTextSlider({ slideData }) {
  const [index, setIndex] = useState(0);
  const [changed, setChanged] = useState(true);

  return (
    <div className="FadeUpTextSlider">
      <Swiper
        className="FadeUpTextSlider__swiper"
        modules={[Autoplay, Navigation]}
        // loop={true}
        navigation={true}
        speed={800}
        autoplay={{
          delay: 6000,
          disableOnInteraction: false,
        }}
        slidesPerView={1}
        spaceBetween={30}
        breakpoints={{
          769: {
            slidesPerView: 1,
            spaceBetween: 60,
          },
        }}
        onSlideChange={() => {
          setChanged(false);
        }}
        onSlideChangeTransitionEnd={(swiper) => {
          setChanged(true);
          setIndex(swiper.activeIndex);
        }}
      >
        {slideData.map((item, idx) => (
          <SwiperSlide key={item.title}>
            <div className="img-box">
              <img src={item.img} alt={item.title} />
            </div>
            <div
              className={`txt-box ${
                changed && index == idx ? "active" : "inactive"
              }`}
            >
              <h4>{item.title}</h4>
              <p>{item.text}</p>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}

export default FadeUpTextSlider;

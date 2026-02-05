import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation } from "swiper/modules";

import "swiper/scss";
import "swiper/css/navigation";

function FadeUpTextSlider({ slideData }) {
  return (
    <div className="FadeUpTextSlider">
      <Swiper
        className="FadeUpTextSlider__swiper"
        modules={[Autoplay, Navigation]}
        navigation={true}
        loop={true}
        speed={800}
        autoplay={{
          delay: 4000,
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
      >
        {slideData.map((item, idx) => (
          <SwiperSlide key={item.title}>
            {({ isActive }) => (
              <>
                <div className="img-box">
                  <img src={item.img} alt={item.title} />
                </div>
                <div className={`txt-box ${isActive ? "active" : "inactive"}`}>
                  <strong>{item.title}</strong>
                  <p>{item.text}</p>
                </div>
              </>
            )}
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}

export default FadeUpTextSlider;

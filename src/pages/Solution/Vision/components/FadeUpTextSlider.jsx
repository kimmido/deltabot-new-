import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";

import "swiper/scss";
import "swiper/css/pagination";

function FadeUpTextSlider({ slideData }) {
  const [index, setIndex] = useState(0);
  const [changed, setChanged] = useState(true);

  return (
    <div className="FadeUpTextSlider">
      <Swiper
        className="FadeUpTextSlider__swiper"
        modules={[Autoplay, Pagination]}
        pagination={{
          clickable: true,
        }}
        loop={true}
        speed={800}
        autoplay={{
          delay: 1500,
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
        // onSlideChange={() => {
        //   setChanged(false);
        // }}
        // onSlideChangeTransitionEnd={(swiper) => {
        //   setChanged(true);
        //   setIndex(swiper.realIndex);
        // }}
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

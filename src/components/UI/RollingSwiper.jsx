import React, { children } from "react";
import { Swiper } from "swiper/react";
import { Autoplay } from "swiper/modules";

import "swiper/scss";
import "swiper/scss/autoplay";

function RollingSwiper({ children }) {
  return (
    <div className="RollingSwiper">
      <Swiper
        modules={[Autoplay]}
        loop={true}
        speed={8000}
        autoplay={{
          delay: 0,
          disableOnInteraction: false,
        }}
        slidesPerView="auto"
        spaceBetween={8}
        breakpoints={{
          768: {
            spaceBetween: 24,
          },
        }}
        allowTouchMove={false}
      >
        {children}
      </Swiper>
    </div>
  );
}

export default RollingSwiper;

import React, { useEffect, useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { FreeMode, Navigation, Thumbs } from "swiper/modules";

import "swiper/scss";
import "swiper/css/navigation";

function VerticalThumbSlider({ slideData }) {
  const [thumbsSwiper, setThumbsSwiper] = useState(null);
  const [mainSwiper, setMainSwiper] = useState(null);

  useEffect(() => {
    console.log(mainSwiper);
  }, [mainSwiper]);

  return (
    <div className="VerticalThumbSlider">
      <Swiper
        onSwiper={setMainSwiper}
        thumbs={{ swiper: thumbsSwiper }}
        modules={[FreeMode, Navigation, Thumbs]}
        navigation={true}
        speed={800}
        spaceBetween={10}
        className="VerticalThumbSlider__mainSwiper"
        onSlideChangeTransitionStart={() => {
          thumbsSwiper?.slideTo(mainSwiper?.activeIndex);
        }}
      >
        {slideData.map((item, idx) => (
          <SwiperSlide key={item.alt}>
            <img src={item.src} alt={item.text} />
          </SwiperSlide>
        ))}
      </Swiper>
      <Swiper
        onSwiper={setThumbsSwiper}
        centeredSlides={true} // 활성 슬라이드 가운데 정렬
        centeredSlidesBounds={true}
        spaceBetween={10}
        slidesPerView={3}
        freeMode={false}
        watchSlidesProgress={true}
        watchOverflow={true}
        modules={[FreeMode, Navigation, Thumbs]}
        className="VerticalThumbSlider__thumbSwiper"
        breakpoints={{
          451: {
            direction: "vertical",
          },
        }}
        onTransitionStart={() => {
          mainSwiper?.slideTo(thumbsSwiper?.activeIndex);
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

export default VerticalThumbSlider;

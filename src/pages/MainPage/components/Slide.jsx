import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination, Navigation } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import main_slide from '/src/assets/images/main_slide(1).jpg'

const style = {
    width: '600px',
    height: '300px'
}

function Slide() {
  return (
    <>
        <Swiper
        modules={[ Autoplay, Pagination, Navigation]}
        loop={true}
        pagination={{
            type: 'fraction',
            clickable: true,
        }}
        navigation={true}
        autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
        spaceBetween={50}
        slidesPerView={1}
        style={style}
        className="mySwiper"
        
        >
            <SwiperSlide><img src={main_slide} alt="메인슬라이드"/></SwiperSlide>
            <SwiperSlide><img src={main_slide} alt="메인슬라이드"/></SwiperSlide>
            <SwiperSlide><img src={main_slide} alt="메인슬라이드"/></SwiperSlide>
            <SwiperSlide><img src={main_slide} alt="메인슬라이드"/></SwiperSlide>
        </Swiper>
    </>
  )
}

export default Slide
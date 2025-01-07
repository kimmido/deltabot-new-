import React from 'react'
import styled from 'styled-components';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination, Navigation } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import main_slide from '../../../assets/images/main_slide(1).jpg'


function Slide() {
    const size = {
        fontSize: 66,
        bottom: 24,
        spacing: 24
    }

    const StyledSwiper = styled(Swiper)`
        width: 100%;
        height: 805px;
        border-radius: 30px;
        

        &::before {
            position: absolute;
            width: 100%;
            height: 100%;
            display: block;
            content: '';
            background: linear-gradient(
                to left,
                rgba(20, 20, 20, 0) 40%,
                rgba(20, 20, 20, 0.15) 70%,
                rgba(20, 20, 20, 0.3) 100%
            );

            z-index: 2;
        }
    
        .swiper-slide {
            display: flex;
            align-items: center;
            
            img {
                width: 100%;
            }
        }
    
        .swiper-pagination-fraction {
            bottom: 172px; 
            left: 24px;
            width: auto;
            padding: 8px 20px;
            color: #fff;
            font-size: 15px;
            border-radius: 1000px;
            background-color: rgba(0, 0, 0, 0.5);
        }
    
        .swiper-button-next,
        .swiper-button-prev {
            width: 40px;
            height: 40px;
            color: #fff;
            background: rgba(0, 0, 0, 0.5);
            border-radius: 50%;
    
            transition: all .3s;
            
            &:hover {
                background: rgba(0, 0, 0, 1);
            }
        }
    
        .swiper-button-next {
            right: 10px;
        }
    
        .swiper-button-prev {
            left: 10px;
        }
    
        .swiper-button-next::after,
        .swiper-button-prev::after {
            font-size: 16px;
        }
    `;
    
    const SlideText = styled.strong`
        position: absolute;
        left: ${size.spacing}px;
        bottom: ${size.bottom}px;
        color: #fff;
        font-size: ${size.fontSize}px;
        line-height: 70px;
    
        z-index: 100;
    `;

  return (
    <>
        <StyledSwiper
        modules={[ Autoplay, Pagination, Navigation]}
        loop={true}
        pagination={{
            type: 'fraction',
            clickable: true,
        }}
        navigation={true}
        autoplay={{
            delay: 6000,
            disableOnInteraction: false,
          }}
        spaceBetween={0}
        slidesPerView={1}
        >
            <SwiperSlide><img src={main_slide} alt="메인슬라이드1"/></SwiperSlide>
            <SwiperSlide><img src={main_slide} alt="메인슬라이드2"/></SwiperSlide>
            <SwiperSlide><img src={main_slide} alt="메인슬라이드3"/></SwiperSlide>
            <SwiperSlide><img src={main_slide} alt="메인슬라이드4"/></SwiperSlide>
            <SlideText>Recycling robot system<br /> & Automation</SlideText>
        </StyledSwiper>
    </>
  )
}

export default Slide
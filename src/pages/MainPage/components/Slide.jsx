import React from 'react'
import styled from 'styled-components';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination, Navigation } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import main_slide from '../../../assets/images/main_slide(1).jpg'
import { respondTo } from '../../../assets/styles/responsive';

const size = {
    displayFont_S: 25,
    displayFont_L: 66,
    spacing: 24,
    buttonIcon: 15
}

const StyledSwiper = styled(Swiper)`
    width: 100%;
    height: 460px;
    border-radius: 30px;
    
    ${respondTo('medium')} {
        height: 805px;
    }
    

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
        // display: flex;
        // align-items: center;
        
        img {
            width: 100%;
            height: 100%;
            object-fit: cover;
        }
    }

    .swiper-pagination-fraction {
        bottom: 100px; 
        left: 16px;
        width: auto;
        padding: 8px 20px;
        color: #fff;
        font-size: 13px;
        border-radius: 1000px;
        background-color: rgba(0, 0, 0, 0.5);
        
        ${respondTo('medium')} {
            bottom: 172px; 
            left: 24px;
            font-size: 15px;
        }
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
            background: rgba(0, 0, 0, .8);
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
        font-size: ${size.buttonIcon}px;
    }
`;

const SlideText = styled.strong`
    position: absolute;
    left: ${size.spacing}px;
    bottom: ${size.spacing}px;
    color: #fff;
    font-size: ${size.displayFont_S}px;
    
    z-index: 100;
    
    ${respondTo('medium')} {
        font-size: ${size.displayFont_L}px;
        line-height: 70px;
    }
`;

function Slide() {
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
        speed={800}
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
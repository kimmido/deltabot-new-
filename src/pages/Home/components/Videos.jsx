import React, { useEffect, useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/scss";
import "swiper/scss/pagination";
// import "./VideoSlide.css"; // 스타일을 별도로 정의합니다.
import { Pagination, EffectCreative } from "swiper/modules";

function Videos() {
  const paginationRef = useRef(null);

  const videos = [
    {
      src: "/videos/video1.mp4",
      title: "PET Positive Sort AMP Customer Facility Footage",
    },
    { src: "/videos/video2.mp4", title: "PET Clear QC" },
    { src: "/videos/video3.mp4", title: "델타로봇을 이용한 자동화라인" },
  ];

  return (
    <section className="Videos">
      <div className="container">
        <h2 className="section_title">Our Video</h2>
        <div className="flex-box">
          <Swiper
            className="video__swiper"
            spaceBetween={0}
            slidesPerView={1}
            modules={[Pagination, EffectCreative]}
            pagination={{
              el: ".video__pagination",
              clickable: true,
              renderBullet: (index, className) => `<p class="${className}">
              <span class="circle"></span>
            <span>${videos[index].title}</span></p>
          `,
            }}
            effect={"creative"}
            creativeEffect={{
              prev: {
                shadow: true,
                translate: [0, 0, -400],
              },
              next: {
                translate: [0, "100%", 0],
              },
            }}
          >
            {videos.map((video, index) => (
              <SwiperSlide key={index}>
                <video controls preload="metadata">
                  <source src={video.src} type="video/mp4" />
                  브라우저가 video를 지원하지 않습니다.
                </video>
              </SwiperSlide>
            ))}
          </Swiper>
          <div className="video__text-wrap">
            <div className="video__diplay-text">
              <span>DELTABOT</span>
              <p>PROJECT VIDEOS</p>
            </div>
            <div className="video__pagination"></div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Videos;

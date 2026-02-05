import React from "react";
import { useOutletContext } from "react-router-dom";
import businessIntroData from "../../data/businessIntroData";

import QuoteArea from "./components/QuoteArea";
import { HighlightText } from "../../components/UI/HighlightText";
import RollingSwiper from "../../components/UI/RollingSwiper";
import { SwiperSlide } from "swiper/react";
import VideoPreviewPlayer from "../../components/UI/VideoPreviewPlayer";
import ApplicationsSection from "./components/ApplicationsSection";
import ProductCatalog from "./components/ProductCatalog";
import IntroLead from "./components/IntroLead";

function Logistics() {
  const { currentTab, productData = [], routes } = useOutletContext();
  const data = businessIntroData[currentTab];
  if (!data) return null;

  const slideData = data.slideData;

  return (
    <div className="Logistics Business" data-theme={data.theme}>
      <QuoteArea title={data.title} />

      {/* 소개글 영역 */}
      <section className="BusinessIntroSection">
        <IntroLead data={data.desc} />

        {/* 롤링 스와이퍼 */}
        <div className="cnt-box">
          <div className="text-box">
            <h4 className="cnt-title">{slideData.title}</h4>
            {slideData.desc && <p className="desc">{slideData.desc}</p>}
          </div>
          <RollingSwiper>
            {slideData.slides.map((item, i) => (
              <SwiperSlide key={"도입의 이점" + (i + 1)}>
                <img src={item} alt={"도입의 이점" + (i + 1)} />
              </SwiperSlide>
            ))}
          </RollingSwiper>
        </div>

        {/* 비디오가 있는 경우 */}
        {data.video && (
          <div className="cnt-box">
            <div className="video-box ">
              <VideoPreviewPlayer
                src={data.video.src}
                poster={data.video.poster}
              />
            </div>
          </div>
        )}

        {/* 이미지 영역 */}
        <div className="cnt-box">
          <div className="text-box">
            {data.cnt01.title && (
              <h4 className="cnt-title">{data.cnt01.title}</h4>
            )}
            {data.cnt01.desc && (
              <p className="desc">
                <HighlightText text={data.cnt01.desc} keyChar="#" />
              </p>
            )}
          </div>
          <img
            className={`intro-img`}
            src={data.cnt01.img}
            alt={data.cnt01.title}
          />
        </div>
      </section>

      {/* 응용분야 */}
      <ApplicationsSection data={data.app} />

      {/* 제품 목록 */}
      <ProductCatalog
        currentTab={currentTab}
        productData={productData}
        routes={routes}
      />
    </div>
  );
}

export default Logistics;

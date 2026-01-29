import React from "react";
import ProductCatalog from "./components/ProductCatalog";
import { useOutletContext } from "react-router-dom";
import businessIntroData from "../../data/businessIntroData";
import QuoteArea from "./components/QuoteArea";
import { SwiperSlide } from "swiper/react";
import { HighlightText } from "../../components/UI/HighlightText";
import ApplicationsSection from "./components/ApplicationsSection";

function Vision() {
  const { currentTab, productData = [], routes } = useOutletContext();
  const data = businessIntroData[currentTab];
  console.log(data);
  if (!data) return null;

  const slideData = data.slideData;

  return (
    <div className="Vision Business" data-theme={data.theme}>
      <QuoteArea title={data.title} />

      <section className="BusinessIntroSection">
        {/* 소개글 영역 */}
        <div className="desc-box">
          {data.desc.map((txt, idx) => (
            <p key={idx} className="desc">
              <HighlightText text={txt} keyChar="#" />
            </p>
          ))}
        </div>

        <div className="cnt-box">
          <div className="text-box">
            {data.cnt01.title && (
              <h4 className="cnt-title">{data.cnt01.title}</h4>
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

export default Vision;

import React from "react";
import ProductCatalog from "./components/ProductCatalog";
import { useOutletContext } from "react-router-dom";
import businessIntroData from "../../data/businessIntroData";
import QuoteArea from "./components/QuoteArea";
import { SwiperSlide } from "swiper/react";
import { HighlightText } from "../../components/UI/HighlightText";
import ApplicationsSection from "./components/ApplicationsSection";
import StepFlow from "@components/UI/StepFlow";
import FadeUpTextSlider from "./components/FadeUpTextSlider";

const TitleImageSection = ({ title, img }) => {
  {
    return (
      <div className="TitleImageSection cnt-box">
        <div className="text-box">
          <h4 className="cnt-title">{title}</h4>
        </div>
        <img className={`intro-img`} src={img} alt={title} />
      </div>
    );
  }
};

function Vision() {
  const { currentTab, productData = [], routes } = useOutletContext();
  const data = businessIntroData[currentTab];
  console.log(data);
  if (!data) return null;

  return (
    <div className="Vision Business" data-theme={data.theme}>
      <QuoteArea title={data.title} />

      {/* 소개글 영역 */}
      <section className="BusinessIntroSection">
        <div className="desc-box">
          {data.desc.map((txt, idx) => (
            <p key={idx} className="desc">
              <HighlightText text={txt} keyChar="#" />
            </p>
          ))}
        </div>

        <TitleImageSection title={data.cnt01.title} img={data.cnt01.img} />

        <div className="system-flow-sec cnt-box">
          <div className="text-box">
            <h4 className="cnt-title">{data.cnt02.title}</h4>
          </div>
          <StepFlow steps={data.cnt02.stepFlowData} />
          <img
            className={`intro-img`}
            src={data.cnt02.img}
            alt={data.cnt02.title}
          />
        </div>

        <TitleImageSection title={data.cnt03.title} img={data.cnt03.img} />

        <FadeUpTextSlider slideData={data.slideData} />

        <TitleImageSection title={data.cnt04.title} img={data.cnt04.img} />
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

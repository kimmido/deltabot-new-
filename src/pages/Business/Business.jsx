import React from "react";
import ProductCatalog from "./components/ProductCatalog";
import { useOutletContext } from "react-router-dom";
import businessIntroData from "../../data/businessIntroData";
import QuoteArea from "./components/QuoteArea";
import IntroLead from "./components/IntroLead";
import ApplicationsSection from "./components/ApplicationsSection";
import usePathSegments from "../../hooks/usePathSegments";

function Business() {
  const { currentTab, productData = [], routes } = useOutletContext();
  const data = businessIntroData[currentTab];
  if (!data) return null;
  const { rootSegment } = usePathSegments();

  return (
    <div className="Business" data-theme={data.theme}>
      <QuoteArea title={data.title} />

      {/* 소개글 영역 */}
      <section className="BusinessIntroSection">
        <IntroLead data={data.desc} />

        {data.images.map((img, index) => (
          <img
            className={`intro-img ${img}`}
            key={index}
            src={`/images/business/${rootSegment}/${currentTab}(${index + 1}).jpg`}
            alt={currentTab}
          />
        ))}

        {data.extraText && (
          <div className="desc-box">
            <p className="desc">{data.extraText}</p>
          </div>
        )}
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

export default Business;

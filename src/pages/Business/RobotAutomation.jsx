import React from "react";
import { useOutletContext } from "react-router-dom";
import businessIntroData from "../../data/businessIntroData";

import QuoteArea from "./components/QuoteArea";
import IntroLead from "./components/IntroLead";
import FeatureCards from "./components/FeatureCards";
import ApplicationsSection from "./components/ApplicationsSection";
import ProductCatalog from "./components/ProductCatalog";
import usePathSegments from "../../hooks/usePathSegments";

function RobotAutomation() {
  const { currentTab, productData = [], routes } = useOutletContext();
  const data = businessIntroData[currentTab];
  if (!data) return null;
  const { rootSegment } = usePathSegments();

  return (
    <div className="RobotAutomation Business" data-theme={data.theme}>
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

        <FeatureCards data={data.features} />
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

export default RobotAutomation;

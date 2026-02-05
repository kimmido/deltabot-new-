import React from "react";
import { useOutletContext } from "react-router-dom";
import businessIntroData from "../../data/businessIntroData";

import QuoteArea from "./components/QuoteArea";
import IntroLead from "./components/IntroLead";
import FeatureCards from "./components/FeatureCards";
import ApplicationsSection from "./components/ApplicationsSection";
import ProductCatalog from "./components/ProductCatalog";

function RobotAutomation() {
  const { currentTab, productData = [], routes } = useOutletContext();
  const data = businessIntroData[currentTab];
  if (!data) return null;

  return (
    <div className="RobotAutomation Business" data-theme={data.theme}>
      <QuoteArea title={data.title} />

      {/* 소개글 영역 */}
      <section className="BusinessIntroSection">
        <IntroLead data={data.desc} />

        <img
          className={`intro-img ${data.images[0]}`}
          src={`/images/business/robot-automation/${currentTab}(1).jpg`}
          alt={currentTab}
        />

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

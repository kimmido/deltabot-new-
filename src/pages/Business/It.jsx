import React from "react";
import { useOutletContext } from "react-router-dom";
import businessIntroData from "../../data/businessIntroData";

import QuoteArea from "./components/QuoteArea";
import IntroLead from "./components/IntroLead";
import CircleIconList from "./components/CircleIconList";
import ApplicationsSection from "./components/ApplicationsSection";
import ProductCatalog from "./components/ProductCatalog";

function It() {
  const { currentTab, productData = [], routes } = useOutletContext();
  const data = businessIntroData[currentTab];
  if (!data) return null;

  return (
    <div className="It Business" data-theme={data.theme}>
      <QuoteArea title={data.title} />

      {/* 소개글 영역 */}
      <section className="BusinessIntroSection">
        <IntroLead data={data.desc} />

        <img
          className={`intro-img ${data.images[0]}`}
          src={`/images/business/it/${currentTab}(1).jpg`}
          alt={currentTab}
        />

        <CircleIconList features={data.features} />
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

export default It;

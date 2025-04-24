import React from "react";
import BusinessIntroSection from "./components/BusinessIntroSection";
import ProductCatalog from "./components/ProductCatalog";
import { useOutletContext } from "react-router-dom";
import businessIntroData from "../../data/businessIntroData";
import BusinessApplications from "./components/BusinessApplications";
import QuoteArea from "./components/QuoteArea";
import FeatureCards from "./components/FeatureCards";

function AutomationPage() {
  const { currentTab, productData = [], routes } = useOutletContext();
  const data = businessIntroData[currentTab];
  if (!data) return null;

  return (
    <div className="Business" data-theme={data.theme}>
      <QuoteArea data={data} />
      <BusinessIntroSection data={data} currentTab={currentTab} />
      <FeatureCards data={data} />
      <BusinessApplications data={data} />
      <ProductCatalog
        currentTab={currentTab}
        productData={productData}
        routes={routes}
      />
    </div>
  );
}

export default AutomationPage;

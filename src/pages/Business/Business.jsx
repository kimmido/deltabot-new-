import React from "react";
import BusinessIntroSection from "./components/BusinessIntroSection";
import ProductCatalog from "./components/ProductCatalog";
import { useOutletContext } from "react-router-dom";
import businessIntroData from "../../data/businessIntroData";
import BusinessApplications from "./components/BusinessApplications";
import QuoteArea from "./components/QuoteArea";
import CircleIconList from "./components/CircleIconList";

function Business() {
  const { currentTab, productData = [], routes } = useOutletContext();
  const data = businessIntroData[currentTab];
  if (!data) return null;

  return (
    <div className="Business">
      <QuoteArea data={data} />
      <BusinessIntroSection data={data} currentTab={currentTab} />
      <CircleIconList features={data.features} />
      <BusinessApplications data={data} />
      <ProductCatalog
        currentTab={currentTab}
        productData={productData}
        routes={routes}
      />
    </div>
  );
}

export default Business;

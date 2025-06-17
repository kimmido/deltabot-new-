import React from "react";
import BusinessIntroSection from "./components/BusinessIntroSection";
import ProductCatalog from "./components/ProductCatalog";
import { Link, useOutletContext } from "react-router-dom";
import businessIntroData from "../../data/businessIntroData";
import BusinessApplications from "./components/BusinessApplications";
import QuoteArea from "./components/QuoteArea";

function Business() {
  const { currentTab, productData = [], routes } = useOutletContext();
  const data = businessIntroData[currentTab];
  if (!data) return null;

  return (
    <div className="Business" data-theme={data.theme}>
      <QuoteArea title={data.title} />

      <BusinessIntroSection data={data} currentTab={currentTab} />

      <BusinessApplications data={data} />

      {data.link && (
        <Link to={data.link.path} className="link-solution btn-pill">
          {data.link.label}
        </Link>
      )}

      <ProductCatalog
        currentTab={currentTab}
        productData={productData}
        routes={routes}
      />
    </div>
  );
}

export default Business;

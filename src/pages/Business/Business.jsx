import React from "react";
import BusinessIntroSection from "./components/BusinessIntroSection";
import ProductCatalog from "./components/ProductCatalog";
import { useOutletContext } from "react-router-dom";

function Business() {
  const { currentTab, productData = [], routes } = useOutletContext();
  return (
    <div className="Business">
      <BusinessIntroSection currentTab={currentTab} />
      <ProductCatalog
        currentTab={currentTab}
        productData={productData}
        routes={routes}
      />
    </div>
  );
}

export default Business;

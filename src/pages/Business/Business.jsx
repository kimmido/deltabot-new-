import React from "react";
import BusinessIntroSection from "./components/BusinessIntroSection";
import ProductCatalog from "./components/ProductCatalog";
import { Link, useOutletContext } from "react-router-dom";
import businessIntroData from "../../data/businessIntroData";
import BusinessApplications from "./components/BusinessApplications";
import QuoteArea from "./components/QuoteArea";
import { IconArrow } from "../../components/icons";

function Business() {
  const { currentTab, productData = [], routes } = useOutletContext();
  const data = businessIntroData[currentTab];
  if (!data) return null;

  return (
    <div className="Business" data-theme={data.theme}>
      <QuoteArea title={data.title} />

      <BusinessIntroSection data={data} currentTab={currentTab} />

      <div className="app-wrap">
        <BusinessApplications data={data} />

        {data.link && (
          <div className="link-area">
            <Link
              to={data.link.path}
              state={{ posId: data.link.posId }}
              className="link-solution btn-pill"
            >
              <span>{data.link.label}</span>
              <IconArrow size="20" weight="1" />
            </Link>
          </div>
        )}
      </div>

      <ProductCatalog
        currentTab={currentTab}
        productData={productData}
        routes={routes}
      />
    </div>
  );
}

export default Business;

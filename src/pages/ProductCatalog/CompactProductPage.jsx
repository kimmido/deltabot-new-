import React, { useState } from "react";
import { useOutletContext } from "react-router-dom";

import SubTabMenu from "../../components/UI/SubTabMenu";
import ProductDetailView from "./components/ProductDetailView";

function CompactProductPage() {
  const { currentTab, productData = [] } = useOutletContext();
  const [currentIdx, setCurrentIdx] = useState(0);

  return (
    <div className="CompactProductPage">
      <SubTabMenu
        items={productData}
        currentIdx={currentIdx}
        setCurrentIdx={setCurrentIdx}
      />
      {productData[currentIdx] &&
        productData[currentIdx].items.map((item) => (
          <>
            <ProductDetailView
              key={item.code}
              item={item}
              currentTab={currentTab}
            />
          </>
        ))}
    </div>
  );
}

export default React.memo(CompactProductPage);

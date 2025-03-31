import React, { useState } from "react";
import { useOutletContext, useSearchParams } from "react-router-dom";

import BasicProductItem from "./components/BasicProductItem";
import SubTabMenu from "../../components/UI/SubTabMenu";

function ProductShowcase() {
  const { currentTab, productData = [] } = useOutletContext();
  const [currentIdx, setCurrentIdx] = useState(0);
  const [searchParams, setSearchParams] = useSearchParams();

  return (
    <div className="ProductShowcase">
      <SubTabMenu
        items={productData}
        currentIdx={currentIdx}
        setCurrentIdx={setCurrentIdx}
        setSearchParams={setSearchParams}
      />
      {productData[currentIdx] &&
        productData[currentIdx].items.map((item) => (
          <BasicProductItem
            key={item.code}
            item={item}
            currentTab={currentTab}
          />
        ))}
      <div className="detail">
        <img src="/images/product/uv/uv제품-details.jpg" alt="" />
      </div>
    </div>
  );
}

export default React.memo(ProductShowcase);

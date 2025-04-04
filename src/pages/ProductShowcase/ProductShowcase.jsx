import React, { useState } from "react";
import { useOutletContext } from "react-router-dom";

import BasicProductItem from "./components/BasicProductItem";
import SubTabMenu from "../../components/UI/SubTabMenu";

function ProductShowcase() {
  const { currentTab, productData = [] } = useOutletContext();
  const [currentIdx, setCurrentIdx] = useState(0);

  return (
    <div className="ProductShowcase">
      <SubTabMenu
        items={productData}
        currentIdx={currentIdx}
        setCurrentIdx={setCurrentIdx}
      />
      {productData[currentIdx] &&
        productData[currentIdx].items.map((item) => (
          <>
            <BasicProductItem
              key={item.code}
              item={item}
              currentTab={currentTab}
            />
            <div className="detail">
              <img
                src={`/images/product/${currentTab}/${item.code}-details.jpg`}
                alt=""
              />
            </div>
          </>
        ))}
    </div>
  );
}

export default React.memo(ProductShowcase);

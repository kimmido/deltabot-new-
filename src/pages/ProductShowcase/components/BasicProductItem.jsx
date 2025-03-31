import React, { useRef, useState } from "react";
import ProductInfo from "../../ProductCatalog/components/ProductInfo";

function BasicProductItem({ item, currentTab }) {
  return (
    <div className="ProductItem">
      <div className="pd_flex">
        <div className="pd_left">
          <img
            src={`/images/product/${currentTab}/${item.code}.png`}
            alt={item.name}
          />
        </div>
        <div className="pd_right">
          <ProductInfo item={item} />
        </div>
      </div>
    </div>
  );
}

export default BasicProductItem;

import React from "react";
import ProductIntro from "./ProductIntro";
import ProductInfoSection from "./ProductInfoSection ";

function ProductDetailView({ item, currentTab }) {
  return (
    <article className="ProductDetailView">
      <div className="pd_flex">
        <div className="pd_left">
          <img
            src={`/images/product/${currentTab}/${item.code}.png`}
            alt={item.name}
          />
        </div>
        <div className="pd_right">
          <ProductIntro item={item} />
        </div>
      </div>
      <ProductInfoSection item={item} currentTab={currentTab} type="detail" />
      <ProductInfoSection item={item} currentTab={currentTab} type="spec" />
    </article>
  );
}

export default ProductDetailView;

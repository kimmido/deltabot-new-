import React from "react";
import ProductIntro from "./ProductIntro";
import ProductInfoSection from "./ProductInfoSection ";

function ProductDetailView({ item, currentTab }) {
  return (
    <article
      className="ProductDetailView"
      style={item.has && { minHeight: "90vh" }}
    >
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
      {item.has && item.has.includes("detail") && (
        <ProductInfoSection item={item} currentTab={currentTab} type="detail" />
      )}
      {item.has && item.has.includes("spec") && (
        <ProductInfoSection item={item} currentTab={currentTab} type="spec" />
      )}
    </article>
  );
}

export default ProductDetailView;

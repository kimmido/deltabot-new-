import React, { useState } from "react";

function ProductInfoSection({ item, currentTab, type }) {
  const [imgLoad, setImgLoad] = useState(false);

  const title = {
    spec: "SPECIFICATION",
    detail: false,
  };
  const srcKeyword = {
    spec: "info",
    detail: "detail",
  };

  return (
    <div className={`ProductInfoSection ${type}`}>
      {imgLoad && title[type] && <h6>{title[type]}</h6>}
      <span
        className="copy-prevent"
        onContextMenu={(e) => {
          e.preventDefault();
        }}
      ></span>
      <div>
        <img
          src={`/images/product/${currentTab}/${item.code}_${srcKeyword[type]}.jpg`}
          alt={type}
          onLoad={() => setImgLoad(true)}
        />
      </div>
    </div>
  );
}

export default ProductInfoSection;

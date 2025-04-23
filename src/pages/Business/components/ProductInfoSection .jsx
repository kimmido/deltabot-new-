import React, { useState } from "react";

function ProductInfoSection({ item, currentTab, type }) {
  const [exists, setExists] = useState(true);

  const title = {
    spec: "SPECIFICATION",
    detail: false,
  };
  const srcKeyword = {
    spec: "info",
    detail: "detail",
  };

  return (
    exists && (
      <div className={`ProductInfoSection ${type}`}>
        {title[type] && <h6>{title[type]}</h6>}
        <span
          className="copy-prevent"
          onContextMenu={(e) => {
            e.preventDefault();
          }}
        ></span>
        <div>
          <img
            src={`/images/product/${currentTab}/${item.code}_${srcKeyword[type]}.jpg`}
            alt="상세 정보"
            onError={() => {
              setExists(false);
            }}
          />
        </div>
      </div>
    )
  );
}

export default ProductInfoSection;

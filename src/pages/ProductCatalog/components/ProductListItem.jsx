import React from "react";

function ProductListItem({ currentTab, item, idx, openModal }) {
  return (
    <button
      key={item.code}
      className="ProductListItem"
      onClick={() => {
        openModal(idx);
      }}
    >
      <img
        src={`/images/product/${currentTab}/${item.code}.png`}
        alt={item.name}
      />
      <div className="subject">
        <h5 className="sb-txt">{item.name}</h5>
        <span className="sb-icon"></span>
      </div>
    </button>
  );
}

export default ProductListItem;

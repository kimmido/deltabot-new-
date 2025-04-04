import React from "react";

function CatalogScrollBtn({ currentTab, item, scrollTo }) {
  return (
    <button
      key={item.code}
      className="CatalogScrollBtn product-scroll__button"
      onClick={() => {
        scrollTo(item.code);
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

export default CatalogScrollBtn;

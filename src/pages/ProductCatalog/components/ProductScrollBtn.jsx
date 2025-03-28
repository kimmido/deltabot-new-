import React from "react";

function ProductScrollBtn({ currentTab, item, scrollTo }) {
  return (
    <button
      key={item.code}
      className="ProductScrollBtn product-scroll__button"
      onClick={() => {
        scrollTo(item.code);
      }}
    >
      <img
        src={`/images/product/${currentTab}/${item.code}.png`}
        alt={item.name}
      />
      <div className="subject">
        <p className="sb-txt">{item.name}</p>
        <span className="sb-icon"></span>
      </div>
      {/* <div className="feature">
        <p>Work space：500mm</p>
        <p>Max payload：9kg</p>
      </div> */}
    </button>
  );
}

export default ProductScrollBtn;

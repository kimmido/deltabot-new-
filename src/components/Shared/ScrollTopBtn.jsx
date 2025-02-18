import React from "react";
import IconArrow from "../icons/IconArrow";

function ScrollTopBtn() {
  const onClick = () => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "smooth",
    });
  };
  return (
    <div className="ScrollTopBtn">
      <button className={`radius-pill `} onClick={onClick}>
        <IconArrow size="24" weight="0" />
        <span className="text">TOP</span>

        <span className="effect"></span>
      </button>
    </div>
  );
}

export default ScrollTopBtn;

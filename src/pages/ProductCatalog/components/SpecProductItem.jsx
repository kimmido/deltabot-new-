import React, { useRef, useState } from "react";
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollToPlugin } from "gsap/ScrollToPlugin";
import ProductInfo from "./ProductInfo";

gsap.registerPlugin(useGSAP, ScrollToPlugin);

function SpecProductItem({ item, currentTab }) {
  const specRef = useRef(null);
  const [isOpen, setIsOpen] = useState(false);

  useGSAP(() => {
    if (!isOpen) return;
    if (specRef.current == null) return;

    gsap.to(window, {
      duration: 1,
      scrollTo: specRef.current,
      ease: "power2.out",
    });
  }, [isOpen]);

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
          <SpecBtn isOpen={isOpen} setIsOpen={setIsOpen} />
        </div>
      </div>
      {isOpen && (
        <SpecContainer item={item} currentTab={currentTab} specRef={specRef} />
      )}
    </div>
  );
}

export default SpecProductItem;

function SpecBtn({ isOpen, setIsOpen }) {
  return (
    <button
      className={isOpen ? "active" : ""}
      onClick={() => setIsOpen(!isOpen)}
    >
      <span className="text">SPECIFICATION</span>
      <span className="icon"></span>
      <span className="effect"></span>
    </button>
  );
}

function SpecContainer({ item, currentTab, specRef }) {
  return (
    <div className="spec-container" ref={specRef}>
      <p>SPECIFICATION</p>
      <span
        onContextMenu={(e) => {
          e.preventDefault();
        }}
      ></span>
      <div className="cnt">
        <img
          src={`/images/product/${currentTab}/${item.code}_info.jpg`}
          alt={item.code}
        />
      </div>
    </div>
  );
}

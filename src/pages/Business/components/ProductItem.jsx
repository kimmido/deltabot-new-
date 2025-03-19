import React, { useRef, useState } from "react";
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollToPlugin } from "gsap/ScrollToPlugin";

gsap.registerPlugin(useGSAP, ScrollToPlugin);

function ProductItem({ item, currentTab, getMap }) {
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
    <div
      className="ProductItem"
      ref={(node) => {
        const map = getMap();
        if (node) {
          map.set(item.code, node); // Mount 시
        } else {
          map.delete(item); // Unmount 시
        }
      }}
    >
      <div className="pd_flex">
        <div className="pd_left">
          <img
            src={`/images/product/${currentTab}/${item.code}.png`}
            alt={item.name}
          />
        </div>
        <div className="pd_right">
          <strong className="prod_name">{item.name}</strong>
          <div className="prod_desc">
            {item.features.map((feature, idx) => (
              <div key={idx} className="prod_desc__inner">
                {feature.title == "null" || (
                  <p className="prod_desc__title">{feature.title}</p>
                )}
                <ul>
                  {feature.texts.map((text) => (
                    <li key={text}>{text}</li>
                  ))}
                </ul>
              </div>
            ))}
            <button
              className={isOpen ? "active" : ""}
              onClick={() => setIsOpen(!isOpen)}
            >
              <span className="text">SPECIFICATION</span>
              <span className="icon"></span>
              <span className="effect"></span>
            </button>
          </div>
        </div>
      </div>
      {isOpen && (
        <div className="spec-container" ref={specRef}>
          <p>SPECIFICATION</p>
          <img
            src={`/images/product/${currentTab}/${item.code}_info.jpg`}
            alt={item.code}
          />
        </div>
      )}
    </div>
  );
}

export default ProductItem;

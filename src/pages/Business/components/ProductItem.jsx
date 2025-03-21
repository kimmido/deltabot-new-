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
      {console.log("아이템 렌더링")}
      <div className="pd_flex">
        <div className="pd_left">
          <img
            src={`/images/product/${currentTab}/${item.code}.png`}
            alt={item.name}
          />
        </div>
        <div className="pd_right">
          <h3 className="prod_name">{item.name}</h3>
          <div className="prod_desc">
            {item.features.map((feature, idx) => (
              <div key={idx} className="prod_desc__inner">
                {feature.title == "null" || (
                  <h4 className="prod_desc__title">{feature.title}</h4>
                )}
                {feature.texts?.map((text, idx) => (
                  <p key={idx}>{text}</p>
                ))}
                {feature.bullets && (
                  <ul className="bullets">
                    {feature.bullets.map((bullet, idx) => (
                      <li key={idx}>{bullet}</li>
                    ))}
                  </ul>
                )}
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
      )}
    </div>
  );
}

export default ProductItem;

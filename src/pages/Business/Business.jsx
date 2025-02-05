import React, { useEffect, useState, useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
gsap.registerPlugin(useGSAP);

import SeriesTabMenu from "./components/SeriesTabMenu";

function Business({ currentPath, productData = [] }) {
  const [currentIdx, setCurrentIdx] = useState(0);
  const [prodIdx, setProdIdx] = useState(null);

  const itemsRef = useRef(null);
  const gsapContainerRef = useRef(null);

  useEffect(() => {
    setCurrentIdx(0);
  }, [currentPath]);

  useEffect(() => {
    setProdIdx(null);
  }, [currentPath, currentIdx]);

  useGSAP(
    () => {
      gsap.fromTo(
        ".product-scroll",
        {
          y: 100,
          opacity: 0,
        },
        {
          y: 0,
          opacity: 1,
          duration: 1,
          ease: "sine.out",
        }
      );
    },
    { dependencies: [currentPath], scope: gsapContainerRef }
  );

  function scrollTo(el) {
    const map = getMap();
    const node = map.get(el);
    node.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  }

  function getMap() {
    if (!itemsRef.current) {
      // 처음 사용하는 경우, Map을 초기화합니다.
      itemsRef.current = new Map();
    }
    return itemsRef.current;
  }

  const openSpec = (id) => {
    setProdIdx((prev) => (prev === id ? null : id));
  };

  return (
    <div className="Business">
      <div className="flex-container" ref={gsapContainerRef}>
        <SeriesTabMenu
          items={productData}
          currentIdx={currentIdx}
          setCurrentIdx={setCurrentIdx}
        />
        <div className="product-scroll">
          {productData[currentIdx] &&
            productData[currentIdx].items.map((item, idx) => (
              <button
                key={item.code}
                className="product-scroll__button"
                onClick={() => {
                  scrollTo(item.code);
                }}
              >
                <img
                  src={`/images/product/${currentPath}/${item.code}.png`}
                  alt={item.name}
                />
                <div className="subject">
                  <p className="sbtxt">{item.name}</p>
                  <span></span>
                </div>
              </button>
            ))}
        </div>
      </div>
      <div className="product__detail">
        {productData[currentIdx] &&
          productData[currentIdx].items.map((item, idx) => (
            <div
              key={item.code}
              className="product__detail-inner"
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
                    src={`/images/product/${currentPath}/${item.code}.png`}
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
                      className={prodIdx === idx ? "active" : ""}
                      onClick={() => openSpec(idx)}
                    >
                      <span className="text">SPECIFICATION</span>
                      <span className="icon"></span>
                      <span className="effect"></span>
                    </button>
                  </div>
                </div>
              </div>
              {/* {prodIdx === idx && ( */}
              <div
                className={`spec-container ${prodIdx === idx ? "open" : ""}`}
              >
                <p>SPECIFICATION</p>
                <img
                  src={`/images/product/${currentPath}/${item.code}_info.jpg`}
                  alt={item.code}
                />
              </div>
              {/* )} */}
            </div>
          ))}
      </div>
    </div>
  );
}

export default Business;

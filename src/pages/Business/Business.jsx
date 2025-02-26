import React, { useEffect, useState, useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
gsap.registerPlugin(useGSAP);

import SeriesTabMenu from "./components/SeriesTabMenu";
import ProductItem from "./components/ProductItem";
import ProductScrollBtn from "./components/ProductScrollBtn";

function Business({ currentPath, productData = [] }) {
  const [currentIdx, setCurrentIdx] = useState(0);

  const itemsRef = useRef(null);
  const gsapContainerRef = useRef(null);

  useEffect(() => {
    setCurrentIdx(0);
  }, [currentPath]);

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
            productData[currentIdx].items.map((item) => (
              <ProductScrollBtn
                currentPath={currentPath}
                item={item}
                scrollTo={scrollTo}
              />
            ))}
        </div>
      </div>
      <div className="product-list">
        {productData[currentIdx] &&
          productData[currentIdx].items.map((item) => (
            <ProductItem
              key={item.code}
              item={item}
              currentPath={currentPath}
              getMap={getMap}
            />
          ))}
      </div>
    </div>
  );
}

export default Business;

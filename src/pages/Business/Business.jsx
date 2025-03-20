import React, { useEffect, useState, useRef } from "react";
import { useOutletContext, useSearchParams } from "react-router-dom";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
gsap.registerPlugin(useGSAP);

import SeriesTabMenu from "./components/SeriesTabMenu";
import ProductItem from "./components/ProductItem";
import ProductScrollBtn from "./components/ProductScrollBtn";

function Business() {
  const { currentTab, productData = [] } = useOutletContext();
  const [currentIdx, setCurrentIdx] = useState(0);
  const [searchParams, setSearchParams] = useSearchParams();

  const itemsRef = useRef(null);
  const gsapContainerRef = useRef(null);

  useEffect(() => {
    const tabParam = searchParams.get("tab");
    if (tabParam) {
      setCurrentIdx(Number(tabParam));
    } else {
      setCurrentIdx(0);
    }
  }, [searchParams, currentTab]);

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
    { dependencies: [currentTab], scope: gsapContainerRef }
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
      {console.log("비즈니스 렌더링")}
      <div className="flex-container" ref={gsapContainerRef}>
        <SeriesTabMenu
          items={productData}
          currentIdx={currentIdx}
          setCurrentIdx={setCurrentIdx}
          setSearchParams={setSearchParams}
        />
        <div className="product-scroll">
          {productData[currentIdx] &&
            productData[currentIdx].items.map((item) => (
              <ProductScrollBtn
                key={item.code}
                currentTab={currentTab}
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
              currentTab={currentTab}
              getMap={getMap}
            />
          ))}
      </div>
    </div>
  );
}

export default React.memo(Business);

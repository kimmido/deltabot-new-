import React, { useEffect, useState, useRef } from "react";
import { useOutletContext, useSearchParams } from "react-router-dom";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
gsap.registerPlugin(useGSAP);

import SubTabMenu from "../../components/UI/SubTabMenu";
import SpecProductItem from "./components/SpecProductItem";
import CatalogScrollBtn from "./components/CatalogScrollBtn";

function ProductCatalog() {
  const { currentTab, productData = [] } = useOutletContext();
  const [currentIdx, setCurrentIdx] = useState(0);

  const itemsRef = useRef(null);
  const gsapContainerRef = useRef(null);

  // 페이지 변경시 등장 요소 애니메이션
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

  // 해당 제품으로 스크롤 이동
  function scrollTo(key) {
    const map = getMap();
    const node = map.get(key);
    node.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  }

  // 노드 저장
  function getMap() {
    if (!itemsRef.current) {
      itemsRef.current = new Map(); // 처음 사용하는 경우, Map을 초기화합니다.
    }
    return itemsRef.current;
  }

  return (
    <div className="ProductCatalog">
      {console.log("비즈니스 렌더링")}
      <div className="flex-container" ref={gsapContainerRef}>
        <SubTabMenu
          items={productData}
          currentIdx={currentIdx}
          setCurrentIdx={setCurrentIdx}
        />
        <div className="scroll-btn-list">
          {productData[currentIdx] &&
            productData[currentIdx].items.map((item) => (
              <CatalogScrollBtn
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
            <div
              key={item.code}
              ref={(node) => {
                const map = getMap();
                if (node) {
                  map.set(item.code, node); // Mount 시
                } else {
                  map.delete(item); // Unmount 시
                }
              }}
            >
              <SpecProductItem item={item} currentTab={currentTab} />
            </div>
          ))}
      </div>
    </div>
  );
}

export default React.memo(ProductCatalog);

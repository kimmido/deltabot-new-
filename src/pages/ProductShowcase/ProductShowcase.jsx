import React, { useEffect, useState, useRef } from "react";
import { useOutletContext, useSearchParams } from "react-router-dom";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
gsap.registerPlugin(useGSAP);

// import ProductItem from "./components/ProductItem";

function ProductShowcase() {
  const { currentTab, productData = [] } = useOutletContext();
  const [currentIdx, setCurrentIdx] = useState(0);
  const [searchParams, setSearchParams] = useSearchParams();

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

  return (
    <div className="ProductShowcase">
      <div className="product-list">
        {/* {productData[currentIdx] &&
          productData[currentIdx].items.map((item) => (
            <ProductItem
              key={item.code}
              item={item}
              currentTab={currentTab}
              getMap={getMap}
            />
          ))} */}
      </div>
    </div>
  );
}

export default React.memo(ProductShowcase);

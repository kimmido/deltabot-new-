import React, { memo, useState, useRef, useEffect } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
gsap.registerPlugin(useGSAP);

import SubTabMenu from "../../../components/UI/SubTabMenu";
import ProductDetailView from "./ProductDetailView";
import ProductListItem from "./ProductListItem";
import Modal from "../../../components/UI/Modal";

function ProductCatalog({ currentTab, productData = [], routes }) {
  if (productData.length === 0) return null;

  const [currentIdx, setCurrentIdx] = useState(0);
  const [prodIdx, setProdIdx] = useState(0);
  const [isModalOpen, setModalOpen] = useState(false);
  const [route, setRoute] = useState({ label: "" });
  const gsapContainerRef = useRef(null);

  useEffect(() => {
    if (routes.items.length == 0) return;
    if (!currentTab) return;
    setRoute(routes.items.find((item) => item.path == currentTab));
  }, [routes, currentTab]);

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
        },
      );
    },
    { dependencies: [currentTab], scope: gsapContainerRef },
  );

  const openModal = (num) => {
    setModalOpen(true);
    setProdIdx(num);
  };

  return (
    <section className="ProductCatalog">
      <div className="catalog__title-box">
        <h3
          className="catalog__title"
          style={{
            backgroundImage: `url(/images/business/prod_banner/${currentTab}-catalog-banner.png)`,
          }}
        >
          <span className="l">{route.label} 시리즈</span>
          <span className="s">업계를 선도하는 고성능 제품을 만나보세요</span>
        </h3>
      </div>

      <div className="flex-container" ref={gsapContainerRef}>
        <SubTabMenu
          items={productData}
          currentIdx={currentIdx}
          setCurrentIdx={setCurrentIdx}
        />
        <div className="product-list">
          {productData[currentIdx] &&
            productData[currentIdx].items.map((item, idx) => (
              <ProductListItem
                key={item.code}
                currentTab={currentTab}
                item={item}
                idx={idx}
                openModal={openModal}
              />
            ))}
        </div>
      </div>

      {productData[currentIdx] && isModalOpen && (
        <Modal setModalOpen={setModalOpen}>
          <ProductDetailView
            item={productData[currentIdx].items[prodIdx]}
            currentTab={currentTab}
          />
        </Modal>
      )}
    </section>
  );
}

export default memo(ProductCatalog);

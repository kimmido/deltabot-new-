import React, { memo, useState, useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
gsap.registerPlugin(useGSAP);

import SubTabMenu from "../../../components/UI/SubTabMenu";
import ProductDetailView from "./ProductDetailView";
import ProductListItem from "./ProductListItem";
import Modal from "../../../components/UI/Modal";

function ProductCatalog({ currentTab, productData = [] }) {
  const [currentIdx, setCurrentIdx] = useState(0);
  const [prodIdx, setProdIdx] = useState(0);
  const [isModalOpen, setModalOpen] = useState(false);
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

  const openModal = (num) => {
    setModalOpen(true);
    setProdIdx(num);
  };

  return (
    <section className="ProductCatalog">
      <h4 className="catalog__title">Products</h4>

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

import React, { useCallback, useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
gsap.registerPlugin(useGSAP);

function SeriesTabMenu({ items, currentIdx, setCurrentIdx, setSearchParams }) {
  const gsapContainerRef = useRef(null);

  useGSAP(
    () => {
      gsap.fromTo(
        ".SeriesTabMenu__text",
        {
          y: 50,
          opacity: 0,
        },
        {
          y: 0,
          opacity: 1,
          duration: 0.8,
          ease: "sine.out",
        }
      );
    },
    { dependencies: [items], scope: gsapContainerRef }
  );

  const moveFocus = () => {
    gsap.to(window, {
      duration: 1,
      scrollTo: { y: gsapContainerRef.current, offsetY: 140 },
      ease: "power2.out",
    });
  };

  const ChageTab = (index) => {
    setCurrentIdx(index);
    setSearchParams({ tab: index }); // 모든 파라미터를 지우고 새롭게 설정
    moveFocus();
    console.log("탭변경");
  };

  return (
    <div ref={gsapContainerRef} className="SeriesTabMenu">
      {console.log("사이드탭 렌더링")}
      {items.map((item, idx) => (
        <button
          key={item.title}
          className={`SeriesTabMenu__item overflow_hidden
           ${currentIdx === idx ? "active" : ""}`}
          onClick={() => {
            ChageTab(idx);
          }}
        >
          <span className="SeriesTabMenu__text">{item.title}</span>
        </button>
      ))}
    </div>
  );
}

export default SeriesTabMenu;

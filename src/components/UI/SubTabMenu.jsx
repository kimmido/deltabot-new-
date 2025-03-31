import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { useSearchParams } from "react-router-dom";
gsap.registerPlugin(useGSAP);

function SubTabMenu({ items, currentIdx, setCurrentIdx }) {
  const gsapContainerRef = useRef(null);
  const [searchParams, setSearchParams] = useSearchParams();

  // 서브 탭메뉴
  useEffect(() => {
    const tabParam = searchParams.get("tab");
    if (tabParam) {
      setCurrentIdx(Number(tabParam));
    } else {
      setCurrentIdx(0);
    }
  }, [searchParams]);

  useGSAP(
    () => {
      gsap.fromTo(
        ".SubTabMenu__text",
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
    <div ref={gsapContainerRef} className="SubTabMenu">
      {console.log("사이드탭 렌더링")}
      {items.map((item, idx) => (
        <button
          key={item.title}
          className={`SubTabMenu__item overflow_hidden
           ${currentIdx === idx ? "active" : ""}`}
          onClick={() => {
            ChageTab(idx);
          }}
        >
          <h4 className="SubTabMenu__title">{item.title}</h4>
        </button>
      ))}
    </div>
  );
}

export default SubTabMenu;

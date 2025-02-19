import React, { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
gsap.registerPlugin(useGSAP);

function SeriesTabMenu({ items, currentIdx, setCurrentIdx }) {
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

  return (
    <div ref={gsapContainerRef} className="SeriesTabMenu">
      {items.map((item, idx) => (
        <button
          key={item.title}
          className={`SeriesTabMenu__item overflow_hidden
           ${currentIdx === idx ? "active" : ""}`}
          onClick={() => {
            setCurrentIdx(idx);
            moveFocus();
          }}
        >
          <span className="SeriesTabMenu__text">{item.title}</span>
        </button>
      ))}
    </div>
  );
}

export default SeriesTabMenu;

import React, { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
gsap.registerPlugin(useGSAP);

function QuoteArea({ title }) {
  const gsapContainer = useRef(null);

  useGSAP(
    () => {
      gsap.to(".quote-text", {
        scrollTrigger: {
          trigger: ".quote-text",
          start: "bottom 86%",
          end: "bottom 48%",
          scrub: 1, // 스크롤에 따라 부드럽게
          markers: false,
        },
        backgroundSize: "100%",
        ease: "none",
      });
    },
    { scope: gsapContainer }
  );

  return (
    <div className="QuoteArea" ref={gsapContainer}>
      <strong className="quote-text">{title}</strong>
    </div>
  );
}

export default QuoteArea;

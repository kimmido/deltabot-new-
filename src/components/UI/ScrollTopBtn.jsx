import React, { useRef } from "react";
import IconArrow from "../icons/IconArrow";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import ScrollTrigger from "gsap/ScrollTrigger";

gsap.registerPlugin(useGSAP, ScrollTrigger);

function ScrollTopBtn() {
  const btnRef = useRef(null);

  // useGSAP(() => {
  //   ScrollTrigger.create({
  //     start: "top+=300", // 스크롤이 300px 이상 내려가면 버튼 표시
  //     onUpdate: (self) => {
  //       setShowButton(self.scroll().top > 300);
  //     },
  //   });
  // });

  const onClick = () => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "smooth",
    });
  };

  return (
    <div className="ScrollTopBtn" ref={btnRef}>
      <button className={`radius-pill `} onClick={onClick}>
        <IconArrow size="24" weight="1  " />
        <span className="text">TOP</span>

        <span className="effect"></span>
      </button>
    </div>
  );
}

export default ScrollTopBtn;

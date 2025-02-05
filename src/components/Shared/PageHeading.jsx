import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
gsap.registerPlugin(useGSAP);

function PageHeading({ title, currentPath }) {
  const backgroundRef = useRef(null);
  const titleRef = useRef(null);

  useGSAP(() => {
    gsap.fromTo(
      backgroundRef.current,
      {
        scale: 1.08,
      },
      {
        scale: 1,
        duration: 6,
        ease: "none",
      }
    );
  }, [currentPath]);

  return (
    <div className="PageHeading">
      <div
        ref={backgroundRef}
        className="PageHeading__background"
        style={{
          backgroundImage: `url(/images/heading/heading_${currentPath}.jpg)`,
        }}
      ></div>
      <div className="overflow_hidden">
        <h2
          ref={titleRef}
          className="page_title"
          data-aos="fade-up"
          data-aos-duration="1000"
        >
          {title}
        </h2>
      </div>
      {/* <p>이미지 경로: @assets/imagse/page_heading_{img}.jpg</p> */}
    </div>
  );
}

export default PageHeading;

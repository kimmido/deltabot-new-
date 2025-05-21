import React, { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
gsap.registerPlugin(useGSAP);

function SolutionHeading({ title, text, currentPath }) {
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
  });

  return (
    <div className="SolutionHeading PageHeading">
      <div className="background">
        <div
          ref={backgroundRef}
          className={`background__img`}
          style={{
            backgroundImage: `url(/images/heading/heading_${currentPath}.jpg)`,
          }}
        ></div>
      </div>
      <div className="page__text-box overflow_hidden">
        <h2
          key={currentPath}
          ref={titleRef}
          className="page__title"
          data-aos="fade-up"
          data-aos-duration="1000"
        >
          {title}
        </h2>
        <h2
          // key={currentPath}
          ref={titleRef}
          className="page__title"
          data-aos="fade-up"
          data-aos-duration="1000"
        >
          {text}
        </h2>
      </div>
    </div>
  );
}

export default SolutionHeading;

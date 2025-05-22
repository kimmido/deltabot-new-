import React, { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
gsap.registerPlugin(useGSAP);

function SolutionHeading({ title, text, currentPath }) {
  const backgroundRef = useRef(null);

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
    <div className="SolutionHeading">
      <div className="background">
        <div
          ref={backgroundRef}
          className={`background__img`}
          style={{
            backgroundImage: `linear-gradient(
              to left,
              rgba(20, 20, 20, 0) 40%,
              rgba(20, 20, 20, 0.15) 70%,
              rgba(20, 20, 20, 0.3) 100%
            ), url(/images/heading/heading_${currentPath}.jpg)`,
          }}
        ></div>
      </div>
      <div className="heading__text overflow_hidden">
        <h2
          key={currentPath}
          className="heading__text__title"
          data-aos="fade-up"
          data-aos-duration="1000"
        >
          {title}
        </h2>
        <h2
          className="heading__text__sub"
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

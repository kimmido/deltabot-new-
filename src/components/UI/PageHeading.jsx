import React, { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
gsap.registerPlugin(useGSAP);

function PageHeading({ title, currentPath }) {
  const backgroundRef = useRef(null);
  const titleRef = useRef(null);
  const [videoLoaded, setVideoLoaded] = useState(false);
  const [isTitle, setTitle] = useState("");

  const videoPage = [
    "collaboration",
    "serial-robot",
    "deltarobot",
    "spectral-camera",
  ];

  useGSAP(() => {
    if (videoPage.includes(currentPath)) return;
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

  const formatWord = (word) => {
    return word.replace(/\b\w/g, (char) => char.toUpperCase()); // 각 단어의 첫 글자를 대문자로 변환
  };

  useEffect(() => {
    setVideoLoaded(false);
  }, [currentPath]);

  useEffect(() => {
    setTitle(formatWord(title));
  }, [title]);

  return (
    <div className="PageHeading">
      <div className="background">
        <div
          ref={backgroundRef}
          className={`background__img`}
          style={{
            backgroundImage: `url(/images/heading/heading_${currentPath}.jpg)`,
          }}
        ></div>
        {videoPage.includes(currentPath) && (
          <video
            key={currentPath}
            muted
            loop
            autoPlay
            playsInline
            className={`background__video ${
              videoLoaded ? "visible" : "hidden"
            }`}
            onLoadedData={() => setVideoLoaded(true)}
          >
            <source
              src={`/videos/heading/${currentPath}.mp4`}
              type="video/mp4"
            />
          </video>
        )}
      </div>
      <div className="page__text-box overflow_hidden">
        <h2
          key={currentPath}
          ref={titleRef}
          className="page__title"
          data-aos="fade-up"
          data-aos-duration="1000"
        >
          {isTitle}
        </h2>
      </div>
    </div>
  );
}

export default PageHeading;

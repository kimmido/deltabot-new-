import React, { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
gsap.registerPlugin(useGSAP);

function PageHeading({ title, currentPath }) {
  const backgroundRef = useRef(null);
  const titleRef = useRef(null);
  const [videoLoaded, setVideoLoaded] = useState(false);
  const [isVideo, setVideo] = useState(true);
  const [isTitle, setTitle] = useState("");

  useGSAP(() => {
    if (!videoLoaded) {
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
    }
  }, [videoLoaded]);

  const formatWord = (word) => {
    return word
      .replace(/-/g, " ") // '-'를 ' '로 변경
      .replace(/\b\w/g, (char) => char.toUpperCase()); // 각 단어의 첫 글자를 대문자로 변환
  };

  useEffect(() => {
    setVideoLoaded(false);
  }, [currentPath]);

  useEffect(() => {
    setTitle(formatWord(title));
  }, [title]);

  return (
    <div className="PageHeading">
      {/* {console.log("페이지 헤딩")} */}
      <div className="background">
        <div
          ref={backgroundRef}
          className={`background__img`}
          style={{
            backgroundImage: `url(/images/heading/heading_${currentPath}.jpg)`,
          }}
        ></div>
        {isVideo && (
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
        {/* {isVideoLoad ? (
        ) : (
        )} */}
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
      {/* <p>이미지 경로: @assets/imagse/page_heading_{img}.jpg</p> */}
    </div>
  );
}

export default PageHeading;

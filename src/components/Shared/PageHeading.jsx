import React, { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
gsap.registerPlugin(useGSAP);

function PageHeading({ title, currentPath }) {
  const backgroundRef = useRef(null);
  const titleRef = useRef(null);
  const [isVideoLoad, setVideoLoad] = useState(true);
  const [isTitle, setTitle] = useState("");

  useGSAP(() => {
    if (!isVideoLoad) {
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
  }, [isVideoLoad]);

  const formatWord = (word) => {
    return word
      .replace(/-/g, " ") // '-'를 ' '로 변경
      .replace(/\b\w/g, (char) => char.toUpperCase()); // 각 단어의 첫 글자를 대문자로 변환
  };

  useEffect(() => {
    setVideoLoad(true);
  }, [currentPath]);

  useEffect(() => {
    setTitle(formatWord(title));
  }, [title]);

  return (
    <div className="PageHeading">
      {console.log("페이지 헤딩")}
      <div className="PageHeading__background">
        {isVideoLoad ? (
          <video
            key={currentPath}
            muted
            loop
            autoPlay
            playsInline
            className="background-video"
            onLoadedData={() => console.log("완료")}
            onError={() => setVideoLoad(false)}
          >
            <source
              src={`/videos/heading/${currentPath}.mp4`}
              type="video/mp4"
            />
          </video>
        ) : (
          <div
            ref={backgroundRef}
            className="background-img"
            style={{
              backgroundImage: `url(/images/heading/heading_${currentPath}.jpg)`,
            }}
          ></div>
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
      {/* <p>이미지 경로: @assets/imagse/page_heading_{img}.jpg</p> */}
    </div>
  );
}

export default PageHeading;

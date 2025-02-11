import React, { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
gsap.registerPlugin(useGSAP);

function PageHeading({ currentPath, video = false }) {
  const backgroundRef = useRef(null);
  const titleRef = useRef(null);
  const stitleRef = useRef(null);
  const [isVideoLoad, setVideoLoad] = useState(true);

  // useGSAP(() => {
  //   if (video) {

  //   }
  //   gsap.fromTo(
  //     backgroundRef.current,
  //     {
  //       scale: 1.08,
  //     },
  //     {
  //       scale: 1,
  //       duration: 6,
  //       ease: "none",
  //     }
  //   );

  // }, [currentPath]);

  return (
    <div className="PageHeading">
      <div className="PageHeading__background">
        {video ? (
          <video
            key={currentPath}
            muted
            loop
            autoPlay
            playsInline
            className="background-video"
            onLoadedData={() => console.log("Video loaded!")}
            onError={() => console.error("Video failed to load")}
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
      <div className="overflow_hidden">
        <h2
          ref={titleRef}
          className="page_title"
          data-aos="fade-up"
          data-aos-duration="1000"
        >
          {currentPath}
        </h2>
      </div>
      {/* <p>이미지 경로: @assets/imagse/page_heading_{img}.jpg</p> */}
    </div>
  );
}

export default PageHeading;

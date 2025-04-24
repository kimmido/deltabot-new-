import React, { useState, useEffect, useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { IconPlayBtn } from "../../../components/icons";
import VideoDefault from "../../../components/UI/VideoDefault";

gsap.registerPlugin(useGSAP, ScrollTrigger);

function VideoItem({ title, id, keywords, desc }) {
  const [isExpanded, setIsExpanded] = useState(false);
  const [isMobile, setIsMobile] = useState(
    window.matchMedia("(max-width: 768px)").matches
  );
  const videoRef = useRef(null);
  const videoBoxRef = useRef(null);
  const closeRef = useRef(null);
  const containerRef = useRef(null);

  useEffect(() => {
    const mediaQuery = window.matchMedia("(max-width: 1024px)");
    const handleResize = (e) => setIsMobile(e.matches);

    mediaQuery.addEventListener("change", handleResize);
    return () => mediaQuery.removeEventListener("change", handleResize);
  }, []);

  useEffect(() => {
    videoAction("pause");
    videoBoxRef.current.style.width = isMobile ? "100%" : "45%";
  }, [isMobile]);

  useGSAP(() => {
    gsap.fromTo(
      containerRef.current,
      {
        y: 100,
        opacity: 0,
      },
      {
        y: 0,
        opacity: 1,
        duration: 0.6,
        ease: "sine.out",
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top 80%",
          end: "center center",
          toggleActions: "play none none reverse",
        },
      }
    );
  });

  const handlePlay = (isMobile, isExpanded) => {
    if (isExpanded) return;
    if (isMobile) {
      videoAction("play");
    } else {
      gsap.fromTo(
        videoBoxRef.current,
        {
          width: "45%",
        },
        {
          width: "90%",
          delay: 0.06,
          duration: 0.5,
          onComplete: () => {
            videoAction("play");
          },
        }
      );
    }
  };

  const handleClose = () => {
    if (isExpanded) {
      videoAction("pause");

      gsap.to(videoBoxRef.current, {
        width: "45%",
        duration: 0.5,
      });
    }
  };

  function videoAction(action) {
    if (action == "play") {
      setIsExpanded(true);
      setTimeout(() => {
        videoRef.current.play();
      }, 100);
    }
    if (action == "pause") {
      setIsExpanded(false);
      videoRef.current.pause();
      videoRef.current.currentTime = 0;
    }
  }

  return (
    <div key={title} className={`VideoItem`} ref={containerRef}>
      <div
        className={`video-box ${isMobile ? "mobile" : "pc"}`}
        ref={videoBoxRef}
        onClick={() => handlePlay(isMobile, isExpanded)}
      >
        <VideoDefault
          src={`/videos/main/main${id}.mp4`}
          poster={`/images/video_poster/main${id}.jpg`}
          controls={isExpanded}
          videoRef={videoRef}
        />
        {!isExpanded && <IconPlayBtn color="#fff" />}
        {isExpanded && !isMobile && (
          <button ref={closeRef} className="close-btn" onClick={handleClose}>
            X
          </button>
        )}
      </div>
      <div className="text-box">
        <strong className="title">{title}</strong>

        <div className="desc">
          {desc.map((p, idx) => {
            // const highlight = '';
            // keywords.forEach(keyword => {
            //   if (p.include(keyword))
            // })

            return (
              <p key={idx} className="desc__p">
                {p}
              </p>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default VideoItem;

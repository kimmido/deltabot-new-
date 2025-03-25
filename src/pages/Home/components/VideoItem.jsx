import React, { useState, useEffect, useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(useGSAP, ScrollTrigger);

function VideoItem({ title, id, desc }) {
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
    videoBoxRef.current.style.width = isMobile ? "100%" : "50%";
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
          width: "50%",
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
        width: "50%",
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
        <video
          preload="none"
          poster={`/images/video_poster/main${id}.jpg`}
          playsInline
          controls={isExpanded}
          ref={videoRef}
        >
          <source src={`/videos/main/main${id}.mp4`} type="video/mp4" />
          브라우저가 비디오 태그를 지원하지 않습니다.
        </video>
        {!isExpanded && (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 280 280"
            xmlSpace="preserve"
          >
            <path
              d="M183.028 43.028H96.972C43.501 43.028 0 86.529 0 140s43.501 96.972 96.972 96.972h86.057c53.47 0 96.971-43.501 96.971-96.972s-43.501-96.972-96.972-96.972m0 175.944H96.972C53.427 218.972 18 183.545 18 140s35.427-78.972 78.972-78.972h86.057C226.573 61.028 262 96.455 262 140s-35.427 78.972-78.972 78.972"
              fill="#fff"
            />
            <path
              d="m177.029 129.326-42.208-35.29c-9.058-7.573-22.838-1.133-22.838 10.674v70.58c0 11.807 13.78 18.248 22.838 10.674l42.208-35.29c6.652-5.561 6.652-15.787 0-21.348"
              fill="#fff"
            />
          </svg>
        )}
        {isExpanded && !isMobile && (
          <button ref={closeRef} className="close-btn" onClick={handleClose}>
            X
          </button>
        )}
      </div>
      <div className="text-box">
        <strong className="title">{title}</strong>
        <div className="desc">
          {desc.map((p, idx) => (
            <p key={idx} className="desc__p">
              {p}
            </p>
          ))}
        </div>
      </div>
    </div>
  );
}

export default VideoItem;

import React, { useState, useEffect, useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { fadeUP } from "../../../utils/fadeUp";

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
    if (isMobile) {
      setIsExpanded(false);
      videoBoxRef.current.style.width = "100%";
      videoRef.current.pause();
    } else {
      videoBoxRef.current.style.width = "50%";
    }
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
          //   onLeaveBack: handleClose,
        },
      }
    );
  });

  const handleExpand = (e) => {
    if (isExpanded || isMobile) return;

    gsap.fromTo(
      videoBoxRef.current,
      {
        width: "50%",
      },
      {
        width: "90%",
        delay: 0.06,
        duration: 0.7,
        onComplete: () => {
          setIsExpanded(true);
          setTimeout(() => {
            videoRef.current.play();
          }, 100);
        },
      }
    );
  };

  const handleClose = () => {
    if (isExpanded) {
      setIsExpanded(false);
      videoRef.current.pause();
      videoRef.current.currentTime = 0;

      gsap.to(videoBoxRef.current, {
        width: "50%",
        duration: 0.5,
      });
    }
  };

  return (
    <div key={title} className={`VideoItem`} ref={containerRef}>
      <div
        className={`video-box ${isMobile ? "mobile" : "pc"}`}
        ref={videoBoxRef}
        onClick={(e) => handleExpand(e)}
      >
        <video
          preload="none"
          poster="/images/video_poster/poster1.jpg"
          playsInline
          controls={isExpanded || isMobile}
          ref={videoRef}
        >
          <source src={`/videos/main/main${id}.mp4`} type="video/mp4" />
          브라우저가 비디오 태그를 지원하지 않습니다.
        </video>
        {isExpanded && !isMobile && (
          <button ref={closeRef} className="close-btn" onClick={handleClose}>
            X
          </button>
        )}
      </div>
      <div
        className="text-box"
        // data-aos="fade-up"
        // data-aos-duration="1000"
        // data-aos-anchor-placement="center-center"
      >
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

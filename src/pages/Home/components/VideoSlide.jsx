import React, { useEffect, useRef } from "react";

function VideoSlide({ video, isActive }) {
  const videoRef = useRef(null);

  useEffect(() => {
    if (videoRef.current == null) return;

    if (isActive) {
      if (videoRef.current.readyState < 2) {
        videoRef.current.load();
      }
    } else {
      videoRef.current.pause();
      videoRef.current.currentTime = 0;
    }
  }, [isActive]);

  return (
    <video
      ref={videoRef}
      controls
      playsInline
      preload={isActive ? "metadata" : "none"}
    >
      <source src={video.src} type="video/mp4" />
      브라우저가 video를 지원하지 않습니다.
    </video>
  );
}

export default VideoSlide;

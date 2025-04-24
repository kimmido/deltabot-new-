import React from "react";

function VideoDefault({
  src,
  poster,
  videoRef,
  controls = true,
  loop = false,
  autoPlay = false,
  muted = false,
  preload = "none",
  type = "video/mp4",
}) {
  return (
    <video
      ref={videoRef}
      preload={preload}
      poster={poster}
      controls={controls}
      autoPlay={autoPlay}
      loop={loop}
      muted={muted}
      playsInline
    >
      <source src={src} type={type} />
      브라우저가 비디오 태그를 지원하지 않습니다.
    </video>
  );
}

export default VideoDefault;

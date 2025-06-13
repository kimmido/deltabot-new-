import React, { useState, useRef } from "react";
import { IconPlayBtn } from "../icons";
import VideoDefault from "./VideoDefault";

function VideoPreviewPlayer(props) {
  const [isPlaying, setIsPlaying] = useState(false);
  const videoRef = useRef(null);
  const videoBoxRef = useRef(null);
  const closeRef = useRef(null);

  const handlePlay = (isPlaying) => {
    if (!isPlaying) {
      videoAction("play");
    }
  };

  const handleClose = () => {
    if (isPlaying) {
      videoAction("pause");
    }
  };

  function videoAction(action) {
    if (action == "play") {
      setIsPlaying(true);
      setTimeout(() => {
        videoRef.current.play();
      }, 100);
    }
    if (action == "pause") {
      setIsPlaying(false);
      videoRef.current.pause();
      videoRef.current.currentTime = 0;
    }
  }

  return (
    <div className="VideoPreviewPlayer">
      <div
        className={`video-box`}
        ref={videoBoxRef}
        onClick={() => handlePlay(isPlaying)}
        style={{ aspectRatio: props.ratio || 16 / 9 }}
      >
        <VideoDefault {...props} controls={isPlaying} videoRef={videoRef} />
        {!isPlaying && <IconPlayBtn color="#fff" />}
        {isPlaying && (
          <button ref={closeRef} className="close-btn" onClick={handleClose}>
            X
          </button>
        )}
      </div>
    </div>
  );
}

export default VideoPreviewPlayer;

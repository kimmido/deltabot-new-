import React, { useState, useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import VideoItem from "./VideoItem";
gsap.registerPlugin(useGSAP);

function VideoSection() {
  const videos = [
    {
      id: 1,
      title: "자동화",
      desc: [
        "델타봇의 재활용 시스템은 최신 자동화 기술을 통해 효율적인 분류와 처리를 실현합니다.",
        "이 시스템은 다양한 재활용 재료를 빠르고 정확하게 분류하여, 재활용 과정의 효율성을 극대화합니다.",
        "델타봇의 정밀한 작업 능력으로 재활용 프로세스가 더욱 빠르고 깨끗하게 이루어지는 모습을 확인해보세요.",
      ],
    },
    {
      id: 1,
      title: "재활용 시스템2",
      desc: [
        "델타봇의 재활용 시스템은 최신 자동화 기술을 통해 효율적인 분류와 처리를 실현합니다.",
        "이 시스템은 다양한 재활용 재료를 빠르고 정확하게 분류하여, 재활용 과정의 효율성을 극대화합니다.",
        "델타봇의 정밀한 작업 능력으로 재활용 프로세스가 더욱 빠르고 깨끗하게 이루어지는 모습을 확인해보세요.",
      ],
    },
    {
      id: 1,
      title: "재활용 시스템",
      desc: [
        "델타봇의 재활용 시스템은 최신 자동화 기술을 통해 효율적인 분류와 처리를 실현합니다.",
        "이 시스템은 다양한 재활용 재료를 빠르고 정확하게 분류하여, 재활용 과정의 효율성을 극대화합니다.",
        "델타봇의 정밀한 작업 능력으로 재활용 프로세스가 더욱 빠르고 깨끗하게 이루어지는 모습을 확인해보세요.",
      ],
    },
  ];

  return (
    <div className="VideoSection">
      <div className="container">
        <h2 className="section_title">작동 중! 델타봇의 현장 스케치</h2>
        <div className="VideoSection__inner">
          {videos.map((video, idx) => (
            <VideoItem key={idx} {...video} />
          ))}
        </div>
      </div>
      {/* <VideoModal
        isOpen={isOpen}
        setIsOpen={setIsOpen}
        src={`/videos/main/main${isVideoId}.mp4`}
      /> */}
    </div>
  );
}

export default VideoSection;

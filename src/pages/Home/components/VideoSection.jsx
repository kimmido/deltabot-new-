import React, { useState, useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import VideoItem from "./VideoItem";
gsap.registerPlugin(useGSAP);

function VideoSection() {
  const videos = [
    {
      id: 1,
      title: "고속 정렬 자동화",
      desc: [
        "델타봇의 고속 정렬 시스템은 최신 로봇 기술을 활용해 생산 공정의 효율성을 극대화합니다.",
        "컨베이어를 따라 이동하는 제품을 실시간으로 감지하고, 여러 개를 동시에 집어 정확한 위치에 배치하여 정렬 작업을 자동화합니다.",
        "빠르고 정밀한 동작으로 균일한 배열을 실현하는 델타봇의 스마트 자동화 공정을 지금 확인해보세요",
      ],
    },
    {
      id: 2,
      title: "재활용 시스템",
      desc: [
        "델타봇의 재활용 시스템은 최신 자동화 기술을 통해 효율적인 분류와 처리를 실현합니다.",
        "이 시스템은 다양한 재활용 재료를 빠르고 정확하게 분류하여, 재활용 과정의 효율성을 극대화합니다.",
        "델타봇의 정밀한 작업 능력으로 재활용 프로세스가 더욱 빠르고 깨끗하게 이루어지는 모습을 확인해보세요.",
      ],
    },
    {
      id: 3,
      title: "협업 로봇을 활용한 정밀 조립 공정",
      desc: [
        "통합된 2D 산업용 카메라를 탑재한 협동 로봇은 고속 결함 감지 및 보정을 수행할 수 있어, 비접촉식이면서도 손상 없이 지능형 검사를 진행하여 품질을 향상시킵니다.",
        "공간 순응성(Space Compliance)을 갖춘 로봇은 일관되지 않은 부품을 효율적으로 처리하고, 커넥터 삽입 테스트와 같은 작업에서 내부 힘을 제거할 수 있습니다.",
        "협동 로봇은 복잡하고 위험하며 반복적인 작업을 안정적으로 처리해, 인간 작업자가 부가가치가 높고 중요한 업무에 집중할 수 있습니다.",
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

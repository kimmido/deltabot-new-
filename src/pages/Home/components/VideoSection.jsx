import React, { useState, useRef } from "react";
import VideoModal from "./VideoModal";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
gsap.registerPlugin(useGSAP);

function VideoSection() {
  const [isOpen, setIsOpen] = useState(false);
  const [isVideoId, setVideoId] = useState(0);
  const mediaBoxRef = useRef(null);
  const videoRef = useRef(null);

  const videoData = [
    {
      id: 1,
      title: "재활용 시스템",
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
      title: "재활용 시스템3",
      desc: [
        "델타봇의 재활용 시스템은 최신 자동화 기술을 통해 효율적인 분류와 처리를 실현합니다.",
        "이 시스템은 다양한 재활용 재료를 빠르고 정확하게 분류하여, 재활용 과정의 효율성을 극대화합니다.",
        "델타봇의 정밀한 작업 능력으로 재활용 프로세스가 더욱 빠르고 깨끗하게 이루어지는 모습을 확인해보세요.",
      ],
    },
  ];

  useGSAP(() => {
    if (isOpen) {
      mediaBoxRef.current = gsap
        .timeline()
        .to(mediaBoxRef.current, {
          scaleX: 0,
          duration: 0.3,
        })
        .to(mediaBoxRef.current, {
          scale: 1.1,
          duration: 0.3,
          onComplete: () => {
            setTimeout(() => {
              videoRef.current?.play();
            }, 100);
          },
        });
    }
  }, [isOpen]);

  return (
    <div className="VideoSection">
      <div className="container">
        <h2 className="section_title">작동 중! 델타봇의 현장 스케치</h2>
        <div className="VideoSection__inner">
          {videoData.map(({ title, desc, id }) => (
            <div
              key={title}
              className="content-box"
              data-aos="fade-up"
              data-aos-duration="1000"
              data-aos-anchor-placement="center-center"
            >
              <div
                className="media-box"
                ref={isVideoId == id ? mediaBoxRef : null}
              >
                {/* <div
                  className="media-box__poster"
                  onClick={() => {
                    setIsOpen(true);
                    setVideoId(id);
                  }}
                >
                  <img
                    className="poster"
                    src="/images/video_poster/poster1.jpg"
                    alt="비디오 썸네일"
                  />
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
                </div> */}
                <div className="media-box__video" onClick={() => {}}>
                  <video
                    preload="none"
                    poster="/images/video_poster/poster1.jpg"
                    controls
                    ref={isVideoId == id ? videoRef : null}
                  >
                    <source
                      src={`/videos/main/main${id}.mp4`}
                      type="video/mp4"
                    />
                    브라우저가 비디오 태그를 지원하지 않습니다.
                  </video>
                </div>
              </div>
              <div
                className="text-box"
                data-aos="fade-up"
                data-aos-duration="1000"
                data-aos-anchor-placement="center-center"
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

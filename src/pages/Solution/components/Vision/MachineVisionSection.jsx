import React from "react";
import ExpandableVideoList from "../../../../components/UI/ExpandableVideoList";
import img1 from "../../../../assets/images/solution/machine-cnt1.jpg";

function MachineVisionSection() {
  const videos = [
    {
      id: 1,
      title: "이종혼입방지시스템",
      src: "/videos/sub/machine1.mp4",
      poster: "/images/video_poster/machine1.jpg",
      desc: [
        "부품 표면에 레이져 마킹되어진 ID를 읽어 들여 동일 크기의 제품들이 서로 섞여서 삽입된 것을 판별해 주는 시스템 원형 제품의 경우 제품의 각도를 추가 측정함.",
      ],
    },
    {
      title: "외관표면검사시스템",
      src: "/videos/sub/machine2.mp4",
      poster: "/images/video_poster/machine2.jpg",
      desc: [
        "지속적으로 프레스에 의해 압력이 가해지는 툴에 대해 파손 유무를 판정해 주는 시스템.",
      ],
      bullets: [
        "툴 교체 주기를 자동으로 작업자에게 통보 함.",
        "툴 설비 1대 ~ 4대까지 동시 사용 선택 가능함.",
      ],
    },
    {
      title: "가공 검사시스템",
      src: "/videos/sub/machine3.mp4",
      poster: "/images/video_poster/machine3.jpg",
      desc: [
        "100개소 이상의 검사 포인트에 대해 작업자의 추가 삭제에 제한이 없도록 설계 되었음.",
      ],
      bullets: [
        "직육면체의 알루미늄 BLOCK에 대한 가공 검사",
        "홀 / 탭 / 단차등의 표면 가공 상태 검사",
        "칩 끼임 등과 같은 홀 내면의 이물질 검사",
        "표면 마킹 상태 검사 및 라인 문자 구분",
      ],
    },
    {
      title: "다관절 로봇 부착 시스템",
      src: "/videos/sub/machine4.mp4",
      poster: "/images/video_poster/machine4.jpg",
      desc: [
        "다관절 로봇에 비젼시스템을 탑재하여 각 검사 필요 포인트별로 부품 체결  유무 / 체결 상태 / 칼라 구분 / 각도,길이등의 측정을 하도록 한 시스템",
      ],
      bullets: [
        "단순 검사 해야 할 포인트가 많은 제품에 유용함.",
        "1개포인트 마다 0.5초씩 소요 됨.",
      ],
    },
  ];

  return (
    <section className="MachineVisionSection">
      <div className="container">
        <section className="container container--s">
          <h3 className="sec__title">머신비전</h3>
          <img className="sec-img" src={img1} alt="머신비전" />

          <p className="cnt-desc">
            카메라나 이미지 센서를 통해 촬영된 영상을 분석하여
            <span className="highlight">사람처럼 물체를 인식하고 판단</span>할
            수 있도록 하는 기술
          </p>
        </section>

        <section>
          <h3 className="sec__title">비전 시스템의 응용</h3>
        </section>

        <section className="VideoSection">
          <ExpandableVideoList videos={videos} />
        </section>
      </div>
    </section>
  );
}

export default MachineVisionSection;

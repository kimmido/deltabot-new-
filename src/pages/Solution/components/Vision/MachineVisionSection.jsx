import React from "react";
import ExpandableVideoList from "../../../../components/UI/ExpandableVideoList";

import img0 from "../../../../assets/images/solution/machine-banner.jpg";
import img2_1 from "../../../../assets/images/solution/machine-cnt2-1.svg";
import img2_2 from "../../../../assets/images/solution/machine-cnt2-2.svg";
import img2_3 from "../../../../assets/images/solution/machine-cnt2-3.svg";
import img2_4 from "../../../../assets/images/solution/machine-cnt2-4.svg";
import img2_5 from "../../../../assets/images/solution/machine-cnt2-5.svg";
import SectionBanner from "./SectionBanner";

function MachineVisionSection() {
  return (
    <section className="MachineVisionSection section">
      <div className="container">
        <SectionBanner
          sectionName="machine"
          title1="머신비전 카메라"
          title2="영상을 분석하여 물체를 사람처럼 인식하고 판단하는 기술"
          src={img0}
        />
      </div>

      <div className="cnt02 container">
        <h3 className="cnt-title">머신 비전 시스템의 응용</h3>
        <div className="flex-container container--m">
          {cnt02.map((item, i) => (
            <div key={item}>
              <img src={item} alt={`응용${i}`} />
            </div>
          ))}
        </div>
      </div>

      <div className="cnt03 container">
        <ExpandableVideoList videos={cnt03} />
      </div>
    </section>
  );
}

const cnt02 = [img2_1, img2_2, img2_3, img2_4, img2_5];

const cnt03 = [
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

export default MachineVisionSection;

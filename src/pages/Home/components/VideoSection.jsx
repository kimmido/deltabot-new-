import React from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import ExpandableVideoList from "../../../components/UI/ExpandableVideoList";

gsap.registerPlugin(useGSAP);

function VideoSection() {
  const videos = [
    {
      title: "고속 정렬 자동화",
      src: "/videos/page/main1.mp4",
      poster: "/images/video_poster/main1.jpg",
      desc: [
        "델타봇의 고속 정렬 시스템은 최신 로봇 기술을 활용해 생산 공정의 효율성을 극대화합니다.",
        "컨베이어를 따라 이동하는 제품을 실시간으로 감지하고, 여러 개를 동시에 집어 정확한 위치에 배치하여 정렬 작업을 자동화합니다.",
        "빠르고 정밀한 동작으로 균일한 배열을 실현하는 델타봇의 스마트 자동화 공정을 지금 확인해 보세요",
      ],
    },
    {
      title: "코봇 팔레타이징 멀티 피킹 시스템",
      src: "/videos/page/main2.mp4",
      poster: "/images/video_poster/main2.jpg",
      desc: [
        "한 번의 움직임으로 여러 제품을 동시에 들어 올려 팔레트에 적재합니다. 로봇의 이동 동선을 최소화하여 기존 방식 대비 작업 속도와 생산성을 획기적으로 높입니다.",
        "다양한 제품 크기에 맞춰 개별 제어가 가능한 다기능 그리퍼와, 실시간으로 위치를 파악하는 스마트 비전이 결합되었습니다. 이를 통해 제품 간격을 자동으로 계산하여 오차 없이 정밀하게 집어 올립니다.",
        "공간 효율을 극대화하기 위해 제품의 최적 적재 각도와 위치를 스스로 결정합니다. 빈틈없는 배치로 팔레트 가동률을 높이고 운송 중 흔들림 없는 안정적인 적재를 완성합니다.",
      ],
    },
    {
      title: "재활용 시스템",
      src: "/videos/page/main3.mp4",
      poster: "/images/video_poster/main3.jpg",
      desc: [
        "델타봇의 재활용 시스템은 최신 자동화 기술을 통해 효율적인 분류와 처리를 실현합니다.",
        "이 시스템은 다양한 재활용 재료를 빠르고 정확하게 분류하여, 재활용 과정의 효율성을 극대화합니다.",
        "델타봇의 정밀한 작업 능력으로 재활용 프로세스가 더욱 빠르고 깨끗하게 이루어지는 모습을 확인해 보세요.",
      ],
    },
    {
      title: "협업 로봇을 활용한 정밀 조립 공정",
      src: "/videos/page/main4.mp4",
      poster: "/images/video_poster/main4.jpg",
      desc: [
        "통합된 2D 산업용 카메라를 탑재한 협동 로봇은 고속 결함 감지 및 보정을 수행할 수 있어, 비접촉식이면서도 손상 없이 지능형 검사를 진행하여 품질을 향상합니다.",
        "공간 순응성(Space Compliance)을 갖춘 로봇은 일관되지 않은 부품을 효율적으로 처리하고, 커넥터 삽입 테스트와 같은 작업에서 내부 힘을 제거할 수 있습니다.",
        "협동 로봇은 복잡하고 위험하며 반복적인 작업을 안정적으로 처리해, 인간 작업자가 부가가치가 높고 중요한 업무에 집중할 수 있습니다.",
      ],
    },
    {
      title: "친환경 수면 정화 로봇",
      src: "/videos/page/main5.mp4",
      poster: "/images/video_poster/main5.jpg",
      desc: [
        "수륙양용 수질 관리 차량은 하천과 호수 등 수계 환경의 유지 관리 문제를 효과적으로 해결합니다.",
        "고성능 수거 갈퀴를 통해 수면 위의 부유 쓰레기를 손쉽게 수거하고, 해안이나 수거 차량으로 직접 운반할 수 있습니다",
        "또한 고속 회전 커터를 장착해 갈대와 수초는 물론 다양한 수생 식물을 신속하게 절단 및 제거할 수 있어 생태계 보전에 기여합니다..",
      ],
    },
  ];

  return (
    <section className="VideoSection">
      <div className="container">
        <h2 className="section_title">작동 중! 델타봇의 현장 스케치</h2>
        <ExpandableVideoList videos={videos} />
      </div>
    </section>
  );
}

export default VideoSection;

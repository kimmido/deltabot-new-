import React from "react";
import HorizontalCardSlider from "./HorizontalCardSlider";
import VerticalThumbSlider from "./VerticalThumbnailSlider";

import img1 from "../../../../assets/images/solution/cleaning-cnt1.jpg";
import img2_1 from "../../../../assets/images/solution/cleaning-cnt2-1.png";
import img2_2 from "../../../../assets/images/solution/cleaning-cnt2-2.png";
import img3_1 from "../../../../assets/images/solution/cleaning-cnt3-1.jpg";
import img3_2 from "../../../../assets/images/solution/cleaning-cnt3-2.jpg";
import img3_3 from "../../../../assets/images/solution/cleaning-cnt3-3.jpg";
import img3_4 from "../../../../assets/images/solution/cleaning-cnt3-4.jpg";
import img3_5 from "../../../../assets/images/solution/cleaning-cnt3-5.jpg";
import img4_1 from "../../../../assets/images/solution/cleaning-cnt4-1.jpg";
import img4_2 from "../../../../assets/images/solution/cleaning-cnt4-2.jpg";
import img4_3 from "../../../../assets/images/solution/cleaning-cnt4-3.jpg";
import img4_4 from "../../../../assets/images/solution/cleaning-cnt4-4.jpg";
import img4_5 from "../../../../assets/images/solution/cleaning-cnt4-5.jpg";
import img4_6 from "../../../../assets/images/solution/cleaning-cnt4-6.jpg";
import img5_1 from "../../../../assets/images/solution/cleaning-cnt5-1.jpg";
import img5_2 from "../../../../assets/images/solution/cleaning-cnt5-2.jpg";

const DescBlock = ({ title, text, children }) => {
  return (
    <>
      <h3 className="sec__title">{title}</h3>
      {children}
      <p className="cnt-desc">{text}</p>
    </>
  );
};

function CleaningRobotSection() {
  return (
    <section className="CleaningRobotSection">
      <section className="cnt01 container">
        <DescBlock {...cnt01}>
          <img
            className="container--s"
            src={img1}
            alt="친환경 수면 정화 로봇"
          />
        </DescBlock>
      </section>

      <section className="cnt02 container container--l">
        <div className="flex-box">
          <img src={img2_1} alt="쓰레기 수거 기능" />
          <img src={img2_2} alt="수생식물 제거 기능" />
        </div>
      </section>

      <section className="cnt03 container">
        <DescBlock {...cnt03} />
        <div className="desc-bottom">
          <HorizontalCardSlider slideData={cnt03.img} />
        </div>
      </section>

      <section className="cnt04 container">
        <DescBlock {...cnt04} />
        <div className="desc-bottom">
          <VerticalThumbSlider slideData={cnt04.img} />
        </div>
      </section>

      <section className="cnt05 container container--l">
        <DescBlock {...cnt05} />
        <div className="flex-container desc-bottom">
          <img src={cnt05.img[0].src} alt={cnt05.img[0].text} />
          <img src={cnt05.img[1].src} alt={cnt05.img[1].text} />
        </div>
        <div>
          <p>{cnt05.content.title}</p>
          <dl className="bullets">
            {cnt05.content.dl.map((item) => (
              <div className="dl-item">
                <dt>{item.dt}</dt>
                <dd>{item.dd}</dd>
              </div>
            ))}
          </dl>
        </div>
      </section>
    </section>
  );
}

export default CleaningRobotSection;

const cnt01 = {
  title: "“친환경 수면 정화 로봇”",
  text: "수륙양용 수질관리 차량은 하천과 호수 등 수계 환경의 유지관리 문제를 효과적으로 해결합니다. 고성능 수거 갈퀴를 통해 수면 위 부유 쓰레기를 손쉽게 수거하고, 해안이나 수거차량으로 직접 운반할 수 있습니다. 또한, 고속 회전 커터를 장착해 갈대, 수초는 물론 여우꼬리말, 말레이시아풀, 흑조류 등 다양한 수생식물을 신속히 절단 및 제거할 수 있어 생태계 보전에 기여합니다. 친환경적이며 효율적인 수질관리 솔루션으로 각광받고 있습니다.",
};

const cnt03 = {
  title: "“오염 퇴적물 제거, 수계의 숨을 되찾다”",
  text: "도시화와 산업화로 인해 호수 주변은 오염물질 축적, 생태계 파괴, 수질 악화 등 심각한 문제에 직면해 있습니다. 특히 농업 비점오염원과 양식어업으로 인한 퇴적물은 수계 환경을 위협하며, '청조', '흑조' 현상을 유발합니다. 당사의 수륙양용 차량은 오염된 퇴적물 제거를 위한 친환경 준설 작업에 최적화되어 있으며, 내륙 수계까지 직접 진입해 슬러지를 효과적으로 제거함으로써 자정 능력을 회복시키고 생태환경 복원을 위한 기반을 마련합니다.",
  img: [
    {
      src: img3_1,
      text: "기계로 수초를 자르는 모습",
    },
    {
      src: img3_2,
      text: "로봇이 수초를 잡는 장면",
    },
    {
      src: img3_3,
      text: "수상에서 수초를 치우는 로봇",
    },
    {
      src: img3_4,
      text: "수초 더미를 들어올리는 로봇",
    },
    {
      src: img3_5,
      text: "수면의 수초르 제거하는 로봇",
    },
  ],
};

const cnt04 = {
  title: "“홍수에도 길을 만든다 – 다목적 수륙양용 구조”",
  text: "강수량 증가 및 여름철 폭우·홍수의 빈발로 인해 비상사태가 자주 발생. 다양한 장소에서의 구조작업이 어려움을 겪고 있으며, 신속한 접근과 구조가 필수.",
  img: [
    {
      src: img4_1,
      text: "강, 호수를 정화하는 수륙양육 로봇",
    },
    {
      src: img4_2,
      text: "강, 호수를 정화하는 수륙양육 로봇",
    },
    {
      src: img4_3,
      text: "강, 호수를 정화하는 수륙양육 로봇",
    },
    {
      src: img4_4,
      text: "강, 호수를 정화하는 수륙양육 로봇",
    },
    {
      src: img4_5,
      text: "강, 호수를 정화하는 수륙양육 로봇",
    },
    {
      src: img4_6,
      text: "강, 호수를 정화하는 수륙양육 로봇",
    },
  ],
};

const cnt05 = {
  title: "“쓰레기 없는 물길, 지속 가능한 미래”",
  text: "수륙양용 차량에 탑재된 수상 쓰레기 수거 시스템은 강, 호수, 해안 등 수면 위의 부유 쓰레기(플라스틱 병, 비닐, 스티로폼, 목재 조각 등) 를 효과적으로 제거합니다.",
  img: [
    {
      src: img5_1,
      text: "기계로 수초를 자르는 모습",
    },
    {
      src: img5_2,
      text: "로봇이 수초를 잡는 장면",
    },
  ],
  content: {
    title: "수륙양용 작업 차량",
    dl: [
      {
        dt: "고속 추진기 탑재:",
        dd: "구조 현장까지 빠르게 이동 가능",
      },
      {
        dt: "수륙 기동성 확보:",
        dd: "수상 및 육상 모두에서 장애물 회피 가능",
      },
      {
        dt: "효율적 구조 수행:",
        dd: "위급한 구조 상황에서 민첩하게 대응 가능",
      },
    ],
  },
};

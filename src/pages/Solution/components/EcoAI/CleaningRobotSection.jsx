import React from "react";
import HorizontalCardSlider from "./HorizontalCardSlider";

import img1 from "../../../../assets/images/solution/cleaning-cnt1.jpg";
import img2_1 from "../../../../assets/images/solution/cleaning-cnt2-1.png";
import img2_2 from "../../../../assets/images/solution/cleaning-cnt2-2.png";
import img3_1 from "../../../../assets/images/solution/cleaning-cnt3-1.jpg";
import img3_2 from "../../../../assets/images/solution/cleaning-cnt3-2.jpg";
import img3_3 from "../../../../assets/images/solution/cleaning-cnt3-3.jpg";
import img3_4 from "../../../../assets/images/solution/cleaning-cnt3-4.jpg";
import img3_5 from "../../../../assets/images/solution/cleaning-cnt3-5.jpg";
import img4 from "../../../../assets/images/solution/cleaning-cnt4.jpg";
import img5_1 from "../../../../assets/images/solution/cleaning-cnt5-1.jpg";
import img5_2 from "../../../../assets/images/solution/cleaning-cnt5-2.jpg";
import img6 from "../../../../assets/images/solution/cleaning-cnt6.jpg";
import img7_1 from "../../../../assets/images/solution/cleaning-cnt7-1.png";
import img7_2 from "../../../../assets/images/solution/cleaning-cnt7-2.png";
import ContenttBlock from "../ContenttBlock";
import VideoDefault from "../../../../components/UI/VideoDefault";

const DescBlock = ({ title, desc, children }) => {
  return (
    <>
      <h4 className="cnt-title">{title}</h4>
      {children}
      <p className="cnt-desc">{desc}</p>
    </>
  );
};

function CleaningRobotSection() {
  return (
    <section className="CleaningRobotSection">
      <ContenttBlock className={"cnt01"} size={1100}>
        <DescBlock {...cnt01}>
          <img
            className="container--s card"
            src={img1}
            alt="친환경 수면 정화 로봇"
          />
        </DescBlock>
      </ContenttBlock>

      <ContenttBlock className={"cnt02"} size={1200}>
        <div className="flex-box">
          <img src={img2_1} alt="쓰레기 수거 기능" />
          <img src={img2_2} alt="수생식물 제거 기능" />
        </div>
      </ContenttBlock>

      <section className="cnt03 container">
        <DescBlock {...cnt03} />
        <div className="space-m">
          <HorizontalCardSlider slideData={cnt03.slide} />
        </div>
      </section>

      <section className="cnt04 container">
        <DescBlock {...cnt04} />
        <div className="space-m container--s">
          <img className="card" src={img4} alt="수생식물 제거 기능" />
        </div>
      </section>

      <ContenttBlock className={"cnt05"}>
        <DescBlock {...cnt05} />
        <div className="flex-container space-m">
          <img src={cnt05.img[0].src} alt={cnt05.img[0].desc} />
          <img src={cnt05.img[1].src} alt={cnt05.img[1].desc} />
        </div>
        <div className="bullets-box space-m">
          <p>{cnt05.content.title}</p>
          <dl className="bullets">
            {cnt05.content.dl.map((item) => (
              <div className="dl-item" key={item.dt}>
                <dt>{item.dt}</dt>
                <dd>{item.dd}</dd>
              </div>
            ))}
          </dl>
        </div>
      </ContenttBlock>

      <ContenttBlock className={"cnt06"}>
        <DescBlock {...cnt06} />
        <div className="space-m flex-container">
          <div className="flex-l">
            <img src={cnt06.img} className="card" alt={cnt06.title} />
          </div>
          <dl className="flex-r">
            {cnt06.dl.map((item, i) => (
              <div className="dl-item" key={item.dt}>
                <dt>{`${i + 1}. ${item.dt}`}</dt>
                <div className="bullets">
                  {item.dd.map((dd) => (
                    <dd key={item.dd}>{dd}</dd>
                  ))}
                </div>
              </div>
            ))}
          </dl>
        </div>
      </ContenttBlock>

      <ContenttBlock
        className={"cnt07"}
        size={1200}
        title={"5.다기능 친황경 수초 제거"}
      >
        {cnt07.map(({ img, list }, i) => (
          <div key={`cnt07-${i}`} className={`cnt07-${i}`}>
            <img className="card" src={img} alt="다기능 수초 제거 로봇" />
            <ul>
              {list.map(({ id, text }) => (
                <li key={id}>
                  <span>{id}</span>
                  <p>{text}</p>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </ContenttBlock>

      <ContenttBlock className={"cnt08"}>
        <ul className={`video-list`}>
          {cnt08.map(({ video, poster, text }, idx) => (
            <li key={text} className="app-item">
              <div className="media-box">
                <VideoDefault
                  key={video}
                  src={`/videos/sub/${video}`}
                  // poster={`/images/video_poster/${poster}`}
                  preload="auto"
                />
              </div>
              <div className="text-box">
                <p>{text}</p>
              </div>
            </li>
          ))}
        </ul>
      </ContenttBlock>
    </section>
  );
}

export default CleaningRobotSection;

const cnt01 = {
  title: "“친환경 수면 정화 로봇”",
  desc: "수륙양용 수질관리 차량은 하천과 호수 등 수계 환경의 유지관리 문제를 효과적으로 해결합니다. 고성능 수거 갈퀴를 통해 수면 위 부유 쓰레기를 손쉽게 수거하고, 해안이나 수거차량으로 직접 운반할 수 있습니다. 또한, 고속 회전 커터를 장착해 갈대, 수초는 물론 여우꼬리말, 말레이시아풀, 흑조류 등 다양한 수생식물을 신속히 절단 및 제거할 수 있어 생태계 보전에 기여합니다. 친환경적이며 효율적인 수질관리 솔루션으로 각광받고 있습니다.",
};

const cnt03 = {
  title: "1. 수질환경 관리 및 유지관리",
  desc: "도시화와 산업화로 인해 호수 주변은 오염물질 축적, 생태계 파괴, 수질 악화 등 심각한 문제에 직면해 있습니다. 특히 농업 비점오염원과 양식어업으로 인한 퇴적물은 수계 환경을 위협하며, '청조', '흑조' 현상을 유발합니다. 당사의 수륙양용 차량은 오염된 퇴적물 제거를 위한 친환경 준설 작업에 최적화되어 있으며, 내륙 수계까지 직접 진입해 슬러지를 효과적으로 제거함으로써 자정 능력을 회복시키고 생태환경 복원을 위한 기반을 마련합니다.",
  slide: [
    {
      img: img3_1,
      text: "기계로 수초를 자르는 모습",
    },
    {
      img: img3_2,
      text: "로봇이 수초를 잡는 장면",
    },
    {
      img: img3_3,
      text: "수상에서 수초를 치우는 로봇",
    },
    {
      img: img3_4,
      text: "수초 더미를 들어올리는 로봇",
    },
    {
      img: img3_5,
      text: "수면의 수초르 제거하는 로봇",
    },
  ],
};

const cnt04 = {
  title: "2.생태 및 환경 보호 ",
  desc: "강수량 증가 및 여름철 폭우·홍수의 빈발로 인해 비상사태가 자주 발생. 다양한 장소에서의 구조작업이 어려움을 겪고 있으며, 신속한 접근과 구조가 필수.",
  img: img4,
};

const cnt05 = {
  title: "3.긴급 구조 및 구호",
  desc: "수륙양용 차량에 탑재된 수상 쓰레기 수거 시스템은 강, 호수, 해안 등 수면 위의 부유 쓰레기(플라스틱 병, 비닐, 스티로폼, 목재 조각 등) 를 효과적으로 제거합니다.",
  img: [
    {
      src: img5_1,
      desc: "기계로 수초를 자르는 모습",
    },
    {
      src: img5_2,
      desc: "로봇이 수초를 잡는 장면",
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

const cnt06 = {
  title: "4.해양쓰레기 수거",
  desc: "수륙양용 차량에 탑재된 수상 쓰레기 수거 시스템은 강, 호수, 해안 등 수면 위의 부유 쓰레기(플라스틱 병, 비닐, 스티로폼, 목재 조각 등) 를 효과적으로 제거합니다.",
  img: img6,
  dl: [
    {
      dt: "수거방식",
      dd: [
        "경사형 벨트, 로봇 암, 흡입식 펌프를 활용해 다양한 쓰레기 형태 수거",
        "자동 분류 및 적재 시스템으로 효율적 정리",
      ],
    },
    {
      dt: "작업 효율성",
      dd: [
        "넓은 수면을 이동하며 광범위한 청소 가능",
        "시각적 환경 정화 및 수질 개선 효과 우수",
      ],
    },
    {
      dt: "자율 시스템",
      dd: [
        "GPS 및 센서를 기반으로 자율 운항 및 무인 수거 가능",
        "인력 부담 감소, 접근이 어려운 지역도 지속적 관리 가능",
      ],
    },
    {
      dt: "활용분야",
      dd: [
        "도시 하천, 관광지, 항구, 저수지 등 다양한 수변 지역에서 활용 가능하며, 수질 보전 및 생태계 보호를 위한 핵심적인 수단으로 기능함.",
      ],
    },
  ],
};

const cnt07 = [
  {
    img: img7_1,
    list: [
      {
        id: "01",
        text: "밀집된 잡초, 수생식물 강력 제거용 회전 커터",
      },
      {
        id: "02",
        text: "깊은 수심까지 절단 가능한 조절식 수중 칼날",
      },
      {
        id: "03",
        text: "수초를 양쪽에서 절단하는 대칭형 수중 절단 칼날",
      },
      {
        id: "04",
        text: "좁은 수로에서도 절단과 수거를 동시에",
      },
      {
        id: "05",
        text: "앞쪽에서 넓게 밀며 고효율 수초 제거",
      },
    ],
  },
  {
    img: img7_2,
    list: [
      {
        id: "06",
        text: "연속 흡입, 고압 토출! 대용량 유체 처리용 나선형 펌프",
      },
      {
        id: "07",
        text: "절단 후 수초도 깔끔하게",
      },
      {
        id: "08",
        text: "협수로에서도 민첩하게 이동하는 보조 추진기",
      },
      {
        id: "09",
        text: "쓰레기부터 뿌리까지, 얕은 수역 최적의 멀티 집게",
      },
      {
        id: "10",
        text: "버킷부터 흡입기까지, 원하는 도구로 바꿔쓰는 멀티암",
      },
    ],
  },
];

const cnt08 = [
  {
    video: "solution-ecoai(1).mp4",
    poster: "solution-ecoai(1).jpg",
    text: "잘라낸 수초를 이동 쌓아놓는 모습",
  },
  {
    video: "solution-ecoai(2).mp4",
    poster: "solution-ecoai(2).jpg",
    text: "해양쓰레기 제거 ",
  },
  {
    video: "solution-ecoai(3).mp4",
    poster: "solution-ecoai(3).jpg",
    text: "AI 알고리즘으로 최적의 경로 계산",
  },
  {
    video: "solution-ecoai(4).mp4",
    poster: "solution-ecoai(4).jpg",
    text: "복잡하고 변화하는 수로 정밀 청소",
  },
];

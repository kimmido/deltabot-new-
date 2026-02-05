import React from "react";
import ContenttBlock from "../components/ContenttBlock";
import ComparisonPanel from "./components/ComparisonPanel";
import VideoPreviewPlayer from "../../../components/UI/VideoPreviewPlayer";
import BasicSlider from "./components/BasicSlider";

import img1 from "../../../assets/images/solution/eco_ai/recycle-cnt1.svg";
import img2_1 from "../../../assets/images/solution/eco_ai/recycle-cnt2-1.jpg";
import img2_2 from "../../../assets/images/solution/eco_ai/recycle-cnt2-2.jpg";
import img2_3 from "../../../assets/images/solution/eco_ai/recycle-cnt2-3.jpg";
import img3_1 from "../../../assets/images/solution/eco_ai/recycle-cnt3-1.jpg";
import img3_2 from "../../../assets/images/solution/eco_ai/recycle-cnt3-2.jpg";
import img4_1 from "../../../assets/images/solution/eco_ai/recycle-cnt4-1.svg";
import img4_2 from "../../../assets/images/solution/eco_ai/recycle-cnt4-2.jpg";
import img4_3 from "../../../assets/images/solution/eco_ai/recycle-cnt4-3.jpg";
import img4_4 from "../../../assets/images/solution/eco_ai/recycle-cnt4-4.jpg";
import img4_5 from "../../../assets/images/solution/eco_ai/recycle-cnt4-5.jpg";
import img4_6 from "../../../assets/images/solution/eco_ai/recycle-cnt4-6.jpg";
import img4_7 from "../../../assets/images/solution/eco_ai/recycle-cnt4-7.jpg";
import img5_1_2 from "../../../assets/images/solution/eco_ai/recycle-cnt5-1-2.png";
import img5_slide1 from "../../../assets/images/solution/eco_ai/recycle-cnt5-slide1.svg";
import img5_slide2 from "../../../assets/images/solution/eco_ai/recycle-cnt5-slide2.svg";
import img5_slide3 from "../../../assets/images/solution/eco_ai/recycle-cnt5-slide3.svg";
import img5_slide4 from "../../../assets/images/solution/eco_ai/recycle-cnt5-slide4.svg";
import useScrollReveal from "../../../hooks/useScrollReveal";

function RecyclingRobotSection() {
  useScrollReveal(".texts", {
    threshold: 0,
    rootMargin: "-80px",
    once: false,
    duration: 600,
    timingFunction: "linear",
  });
  useScrollReveal(".image", {
    threshold: 0.2,
    rootMargin: "-80px",
    once: false,
    duration: 600,
    timingFunction: "linear",
  });

  return (
    <section className="RecyclingRobotSection">
      <ContenttBlock className={"cnt01"}>
        <h6 className="sec-title">"폐플라스틱을 자원으로 순환"</h6>
        <p className="cnt-desc">
          기존 사회는 폐기물의 ‘처리’에 초점을 맞췄습니다. 대부분 소각하거나
          매립하는 방식이었고, 환경 영향은 부차적인 문제로 취급됐습니다. 그러나
          이제는 폐기물 발생을 줄이고, 발생한 자원은 재사용(reuse)하거나
          재생이용(recovery)하는 방향으로 자원순환 시스템이 전환되고 있습니다.
        </p>
        <img src={img1} alt="자원 순환 과정" />
      </ContenttBlock>

      <ContenttBlock className={"cnt02"}>
        <div className="line-box card">
          <h4 className="cnt-title">{cnt02.title}</h4>
          <div className="flex-container">
            <img src={cnt02.img[0]} alt={cnt02.title} />
            <img src={cnt02.img[1]} alt={cnt02.title} />
            <img src={cnt02.img[2]} alt={cnt02.title} />
          </div>
        </div>
        <div className="pill-list">
          {cnt02.textList.map(({ title, texts }) => (
            <div key={title} className="flex-container">
              <div className="flex-title">
                <p className="inner">{title}</p>
              </div>
              <ul className="flex-texts">
                <li className="text">
                  <p>{texts[0]}</p>
                </li>
                <li className="text">
                  <p>{texts[1]}</p>
                </li>
                <li className="text">
                  <p>{texts[2]}</p>
                </li>
              </ul>
            </div>
          ))}
        </div>
      </ContenttBlock>

      <ContenttBlock className="cnt03" title="2.재활용 자동화의 이점">
        <ComparisonPanel data={cnt03} />
      </ContenttBlock>

      <ContenttBlock className="cnt04" title="3.위험한 환경에서 로봇의 이점">
        <img
          className="container--s"
          src={img4_1}
          alt="위험한 환경에서 로봇의 이점"
        />
        <ul className="grid-block grid-block--three-col">
          {cnt04.map(({ img, title, texts }, idx) => (
            <li key={title} className="grid-block__item card">
              <div className="grid-block__thumb">
                <img src={img} alt={`이점-${title}`} />
              </div>
              <div className="grid-block__text-box">
                <strong className="grid-block__title">{title}</strong>
                <ul className="grid-block__list bullets">
                  {texts.map((text) => (
                    <li key={text}>{text}</li>
                  ))}
                </ul>
              </div>
            </li>
          ))}
        </ul>
      </ContenttBlock>

      <div className="cnt06-wapper">
        <ContenttBlock className="cnt06" title="4.APPLICATIONS">
          <div className="flex-container">
            <div className="flex-l" data-aos="fade-right">
              <VideoPreviewPlayer
                src={`/videos/page/solution-ecoai(5).mp4`}
                poster="/images/video_poster/solution-ecoai(5).jpg"
              />
            </div>
            <div className="flex-r" data-aos="fade-left">
              <BasicSlider slides={cnt05} />
            </div>
          </div>
          {cnt06.map((item, i) => (
            <article key={item.title} className="flex-container">
              <div className="flex-l">
                <div className={`image i${i + 1}`} data-usr="zoom-out"></div>
              </div>
              <div className="texts flex-r" data-usr="fade-up">
                <strong className="title">
                  <em className="num">{`0${i + 1}`}</em>
                  {item.title}
                </strong>

                <ul className="bullets">
                  {item.bullets &&
                    item.bullets.map((bullet) => (
                      <li key={bullet}>{bullet}</li>
                    ))}
                </ul>

                {item.img && <img src={item.img} alt="plastics" />}

                {item.texts.map((text, i) => (
                  <p key={i}>{text}</p>
                ))}
              </div>
            </article>
          ))}
        </ContenttBlock>
      </div>
    </section>
  );
}

const cnt02 = {
  title: "1.재활용 작업장의 현실과 문제점",
  img: [img2_1, img2_2, img2_3],
  textList: [
    {
      title: "작업자 안전위협",
      texts: [
        "유리 조각, 금속, 주사바늘 등 비위생적이거나 위험한 물질 포함",
        "화학물질, 먼지, 곰팡이, 중금속 등에 장기간 노출될 위험",
        "실외 또는 반개방 구조에서 작업하는 경우  열사병, 저체온증 위험",
      ],
    },
    {
      title: "낮은 작업효율",
      texts: [
        "사람이 눈으로 보고 손으로 분리하는 구조가 여전히 많음",
        "잘못된 분리배출로 인해 이물질이 많아 고품질 재활용이 어려움",
        "AI 비전 및 로봇 시스템의 도입이 미진하거나 초기 단계",
      ],
    },
    {
      title: "기술 시스템의 한계",
      texts: [
        "장비 정지 시 수작업으로 전환, 인력 부담 증가",
        "플라스틱 종류별 구분, 필름형태 등 감지가 어려운 소재 존재",
        "자동화 설비 도입이 늦어 사람 손에 의존하는 부분이 많음",
      ],
    },
    {
      title: "인력수급의 어려움",
      texts: [
        "악취, 먼지, 고온·저온, 위험 물질이 많은 작업 환경 탓에 지원 기피",
        "젊은 인력의 유입이 적고, 기존 작업자의 연령이 높아짐",
        "근속률이 낮고, 숙련인력 확보가 어려움",
      ],
    },
    {
      title: "감염병 전파 위험",
      texts: [
        "코로나19 같은 유행성 병원균이 작업자들에게 전파가 가능",
        "음식물, 침, 혈액 등과 접촉 가능성이 높아 세균·바이러스 전파 우려",
        "장갑, 마스크, 고글 등 착용 미흡 시 직접 노출",
      ],
    },
  ],
};

const cnt03 = {
  head: [
    {
      img: img3_1,
      caption: "국내 재활용 플라스틱 선별 공정(노동집약적)",
    },
    {
      img: img3_2,
      caption: "해외 선도국 재활용 플라스틱 선별 공정(자동화)",
    },
  ],

  chart: [
    {
      head: "분당 작업량",
      items: [
        {
          text: "30 - 50개 (숙련자 1인)",
          per: "40%",
        },
        {
          text: "70 - 95개 (로봇 1대)",
          per: "90%",
        },
      ],
    },
    {
      head: "작업 반경",
      items: [
        {
          text: "1m 미만",
          per: "30%",
        },
        {
          text: "1m 이상",
          per: "50%",
        },
      ],
    },
    {
      head: "선별률(정확도)",
      items: [
        {
          text: "30 - 50%",
          per: "40%",
        },
        {
          text: "80 - 95%",
          per: "90%",
        },
      ],
    },
    {
      head: "하루 평균 선별량",
      items: [
        {
          text: "21,600개 (9시간 근무)",
          per: "21%",
        },
        {
          text: "118,800개 (24시간 가동)",
          per: "100%",
        },
      ],
    },
  ],
};

const cnt04 = [
  {
    img: img4_2,
    title: "작업자 안전 확보",
    texts: [
      "날카로운 플라스틱 파편, 고열, 유해가스 등 위험 환경에서 로봇이 작업",
      "유해물질(예: 오염된 플라스틱, 병원균 포함 쓰레기) 노출 최소화",
    ],
  },
  {
    img: img4_3,
    title: "작업 효율성 극대화",
    texts: [
      "24시간 무중단 작업 가능",
      "일정한 속도와 품질 유지",
      "반복 작업의 정확도 향상 → 불량률 감소",
    ],
  },
  {
    img: img4_4,
    title: "생산성 향상",
    texts: [
      "분류, 절단, 압축, 세척 등 전 공정 자동화",
      "처리량 대폭 증가",
      "사이클 타임 단축 → 재활용 가능 물량 증가",
    ],
  },
  {
    img: img4_5,
    title: "장기적인 비용 절감",
    texts: [
      "인건비, 교육비, 안전사고 관련 비용 절감",
      "고장률이 낮고 정기적인 유지보수로 총 운용비용 감소",
    ],
  },
  {
    img: img4_6,
    title: "정밀 분류 기능 강화",
    texts: [
      "비전 시스템 + AI 로봇 도입 시 PET, PP, PE, PS 등 플라스틱을 고속 정밀 분류",
      "수작업 대비 낮은 오염률, 높은 품질의 재활용 제품 생산 가능",
    ],
  },
  {
    img: img4_7,
    title: "환경 개선 및 ESG 대응",
    texts: [
      "정확한 분류 및 정제로 재활용률 증가",
      "친환경 경영 + 스마트팩토리 구축을 통한 기업 이미지 제고 및 ESG 경영 실현",
    ],
  },
];

const cnt05 = [
  <img src={img5_slide1} alt="재질분류" />,
  <img src={img5_slide2} alt="재질분류" />,
  <img src={img5_slide3} alt="재질분류" />,
  <img src={img5_slide4} alt="재질분류" />,
];

const cnt06 = [
  {
    title: "PLASTICS",
    bullets: [
      "Water bottles",
      "Cartons",
      "Milk jugs",
      "Clamshells",
      "Lids",
      "Coffee pods",
      "Tubs",
      "Thin films",
      "Cups",
    ],
    img: img5_1_2,
    texts: [
      "델타봇의 고속 지능형 로봇 시스템은 플라스틱을 보다 더 빠르고 보다 더 정확하게 잡을 수 있도록 설계되었습니다. 업계 최고의 인공지능 플랫폼으로 소재 구성, 색상, 선명도, 불투명도, 폼 팩터 등으로 플라스틱을 구분하고, 델타 스타일 로봇으로 구성되어 재활용시장에서 사용할 수 있는 최적화된 고객 맞춤시스템으로 공급하고 있습니다.",
    ],
  },
  {
    title: "PAPER",
    bullets: [
      "Newspaper",
      "Paperboard containers",
      "Sorted office paper",
      "Carrier stock",
      "Magazines",
      "Cartons",
      "Corrugated cardboard",
      "Cups",
      "Boxboard",
    ],
    texts: [
      "델타봇의 고속 지능형 로봇 시스템은 고급 OCC(복합 판지), 혼합 용지, SOP(복합 사무 용지), 신문 용지 등을 구분하여 분류할 수 있습니다.",
      "또한, 재활용분야에서 가장 정확하고 확장가능한 AI 플랫폼을 통해 효율성과 신뢰성을 지속적으로 구축하고 있으며, 재활용 시장에서의 경쟁력 있는 분류시스템을 공급하고 있습니다.",
    ],
  },
  {
    title: "METALS",
    bullets: [
      "Aluminum",
      "Pet food containers",
      "Aerosol cans",
      "Nonferrous food containers",
      "Pie tins",
      "Foil",
    ],
    texts: [
      "델타봇의 고속 지능형 로봇 시스템은 사람이 선별하는 것 보다 두 배 이상의 속도로 빠르고 안정적으로 금속을 분류하는 작업을 할 수 있습니다.",
      "또한, 분류시 금속이 부식이 되지 않게 빠르고 정확하게 구분하고 고순도의 금속을 선별하며, 추가 하드웨어 구성 없이 최종 라인에 설치되어 버려지는 음료 캔을 다시 재활용하기 위한 최적의 솔루션으로 공급하고 있습니다.",
    ],
  },
  {
    title: "CONSTRUCTION",
    bullets: [
      "Fiber",
      "Masonry",
      "Copper pipes and tubing",
      "Tile",
      "Gypsum",
      "Wood",
      "UBCs",
      "Plastic",
      "Concrete",
    ],
    texts: [
      "델타봇의 지능형 로봇 시스템은 AI를 활용하여 효율성을 증가시키고, 흘러가는 컨베어에서 무심코 지나칠 수 있는 재활용 제품의 손실을 방지하며, AI 플랫폼의 경험적 학습을 통해 서로 다른 폐기물을 사용자에 요구에 맞게 분류합니다.",
      "델타봇의 AI 로봇 시스템은 쉽게 놓치는 목재, 금속, 유리 및 플라스틱과 같은 가볍고 작은 물체에도 AI를 활용하여 사용자의 요구에 맞게 구분합니다.",
      "고순도의 크고 작은 제품을 정밀하고 정확하게 분류 하고, 기타 분류가 필요한 분야에 델타봇의 AI를 사용할 수 있습니다.",
    ],
  },
  {
    title: "ELECTRONICS",
    bullets: [
      "Batteries",
      "Stainless steel",
      "Capacitors",
      "Wire",
      "Aluminum",
      "Wound motors",
      "Brass",
      "Plastic",
      "Copper",
      "PCB",
    ],
    texts: [
      "델타봇의 지능형 로봇 시스템은 전자, 전기 폐기물을 구분하고 분류하는 곳에도 최적화 되어있습니다. 분당 80회 이상의 속도로 가장 작은 폐기물 조각을 식별하고 정렬하여, 컨베어에서 계속적으로 흘러나오는 전기, 전자 폐기물 구분하여 분류하는 복합시스템 입니다.",
      "다양한 폐기물 구성요소 중 경제적 가치가 높은 금속과 플라스틱, 부품 등을 정확하고 빠르게 분류처리 하여 고객에게 많은 이득을 제공할 수 있습니다.",
    ],
  },
  {
    title: "ORGANICS",
    texts: [
      "AI와 로봇 기술로 오염 수준에 상관없이 퇴비와 유기 폐기물에서 더 많은 가치를 창조합니다. 델타봇의 지능형 로봇 시스템을 통해 버려지는 음식물 폐기물을 환경과 경제에 긍정적인 영향을 미칠 수 있도록 시스템 구성 활용이 가능합니다.",
    ],
  },
];

export default RecyclingRobotSection;

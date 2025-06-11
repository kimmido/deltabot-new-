import React from "react";
import SectionBanner from "./components/SectionBanner";
import FadeUpTextSlider from "./components/FadeUpTextSlider";
import ContenttBlock from "../components/ContenttBlock";

import img0 from "../../../assets/images/solution/spectral-banner.jpg";
import img1 from "../../../assets/images/solution/spectral-cnt1.jpg";
import img2 from "../../../assets/images/solution/spectral-cnt2.jpg";
import img3_1 from "../../../assets/images/solution/spectral-cnt3-1.jpg";
import img3_2 from "../../../assets/images/solution/spectral-cnt3-2.jpg";
import img3_3 from "../../../assets/images/solution/spectral-cnt3-3.jpg";
import img3_4 from "../../../assets/images/solution/spectral-cnt3-4.jpg";
import img4_1 from "../../../assets/images/solution/spectral-cnt4-1.jpg";
import img4_2 from "../../../assets/images/solution/spectral-cnt4-2.jpg";
import img4_3 from "../../../assets/images/solution/spectral-cnt4-3.jpg";
import img4_4 from "../../../assets/images/solution/spectral-cnt4-4.jpg";
import img4_5 from "../../../assets/images/solution/spectral-cnt4-5.jpg";
import img4_6 from "../../../assets/images/solution/spectral-cnt4-6.jpg";
import img4_7 from "../../../assets/images/solution/spectral-cnt4-7.jpg";

function HyperspectralSection() {
  return (
    <section className="HyperspectralSection section">
      <div className="container">
        <SectionBanner
          sectionName="machine"
          title1="초분광 카메라"
          title2="보이지 않는 것을 보는 기술, 초분광 이미징의 새로운 기준"
          src={img0}
        />
      </div>

      <ContenttBlock
        className={"cnt01"}
        title={"1.초분광 이미징이란?"}
        size={1000}
      >
        <img src={img1} alt="초분광 이미징이란" />
      </ContenttBlock>

      <ContenttBlock
        className={"cnt02"}
        title={"2.초분광 이미징 시스템"}
        size={1000}
      >
        <img src={img2} alt="이미징 시스템" />
      </ContenttBlock>

      <ContenttBlock
        className={"cnt03"}
        size={1200}
        title={"3.초분광 이미징 시스템의 특징"}
      >
        <div className="flex-container">
          <img src={img3_1} alt="시스템의 특징" />
          <img src={img3_2} alt="시스템의 특징" />
          <img src={img3_3} alt="시스템의 특징" />
        </div>
        <div className="container--s">
          <img src={img3_4} alt="시스템의 특징" />
        </div>
      </ContenttBlock>

      <ContenttBlock
        className={"cnt04"}
        size={1200}
        title={"4.초분광 카메라 적용분야"}
      >
        <FadeUpTextSlider slideData={cnt04} />
        {/* <VerticalThumbSlider slideData={cnt04} /> */}
      </ContenttBlock>
    </section>
  );
}

const cnt04 = [
  {
    img: img4_1,
    title: "스마트 농업",
    text: "감자와 찰흙의 다른 스펙트럼을 이용하여 분리하는 자동화공정 적용",
  },
  {
    img: img4_2,
    title: "제약",
    text: "포장 캡슐안에 빈 공간이 있거나 , 결함 혹은 다른약이 포함되었는지 여부 확인가능!",
  },
  {
    img: img4_3,
    title: "건축 인프라",
    text: "제지 공정에서 종이의 수분함량 확인 및 모니터링!",
  },
  {
    img: img4_4,
    title: "식품",
    text: "아몬드와 아몬드 껍질의 다른 Spectra를 이용하여 자동화 분리과정 적용",
  },
  {
    img: img4_5,
    title: "녹조",
    text: "유해조류 분석 및 구별, 녹조 발생 모니터링 및 중국발 외래종 ‘괭생이 모자반‘ 모니터링등!",
  },
  {
    img: img4_6,
    title: "환경",
    text: "초분광카메라로 흰색 스펙트럼이 나타난 부분을 통해 기름이 유출된 위치 확인",
  },
  {
    img: img4_7,
    title: "국방",
    text: "항공에서의 적의 정확한 위치 확인, 군용차량, 지뢰탐지, 급조폭발물, 표적 추적·지시용 사용",
  },
];

export default HyperspectralSection;

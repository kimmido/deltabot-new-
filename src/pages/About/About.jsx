import React, { useContext } from "react";
import PageHeading from "../../components/Shared/PageHeading";
import { CategoryRoutesContext } from "../../contexts/CategoryRoutesContext";

import businessImg1 from "../../assets/images/home/business_section(1).jpg";
import mapImg from "../../assets/images/map.png";
import LoopItem from "./components/LoopItem";

function About() {
  const category = useContext(CategoryRoutesContext);
  const routeBusiness = category.find((item) => item.main.label == "사업소개");
  const businessSub = routeBusiness.sub;

  const businessImg = [
    businessImg1,
    businessImg1,
    businessImg1,
    businessImg1,
    businessImg1,
  ];

  const values = [
    {
      title: "혁신",
      text: "최첨단 자동화 기술과 IT 솔루션을 결합하여 생산성과 효율성을 극대화합니다.",
    },
    {
      title: "혁신",
      text: "당사와 고객을 위해 최고 수준의 안전과 품질을 보증합니다.",
    },
    {
      title: "안전 및 품질",
      text: "고객의 요구 사항을 진심으로 이해하고 성공을 보장하는 고유한 솔루션을 제공하기 위해 고객의 의견을 경청합니다.",
    },
  ];

  return (
    <div className="About">
      <div className="container">
        <PageHeading title="회사소개" currentPath="about" />
        <section className="values-section">
          <h3>델타봇의 핵심가치</h3>
          {values.map((value) => (
            <div className="circle circle--l">
              <div className="text">
                <h4>{value.title}</h4>
                <p>{value.text}</p>
              </div>
            </div>
          ))}
        </section>

        <section className="intro-section">
          <p>
            델타봇은 로봇 자동화, 비전 시스템, 재활용 시스템, 의료, IT 등{" "}
            <br class="pc-break" />
            다양한 산업 분야에 적용 가능한 Full Line-up의 제품군을 보유하고
            있습니다.
          </p>
          <p>
            우리는 단순한 기계 판매를 넘어, 각 산업에 최적화된 맞춤형 자동화
            시스템을 설계합니다.
            <br />
            식품, 전자, 물류, 의료, 재활용 등 다양한 분야에서 델타 로봇, 스카라
            로봇, 협동 로봇 등의 <br class="pc-break" />
            첨단 장비를 활용한 스마트 생산 시스템을 구축하고 있습니다.
          </p>
          <p>
            또한, IT 인프라 구축 및 서버 자동화 기술을 통해 스마트 팩토리와
            데이터 기반의 지능형 생산 환경을 지원하며, <br class="pc-break" />
            안정적이고 효율적인 운영이 가능하도록 최적의 솔루션을 제공합니다.
          </p>
          <p>
            ㈜델타봇은 앞으로도 고객의 신뢰를 우선으로 하여 더욱 경쟁력 있고{" "}
            <br class="pc-break" /> 우수한 품질의 장비를 공급하고자 최선을
            다하겠습니다. 감사합니다.
          </p>
        </section>

        <ul className="loop-list">
          {businessSub.map((item, idx) => (
            <LoopItem
              key={item.label}
              src={businessImg[idx]}
              alt={item.label}
              caption={item.label}
            />
          ))}
        </ul>

        <section className="contact-section">
          <div className="flex-box">
            <h3 className="flex-l">Contact Us</h3>
            <ul className="flex-r">
              <li>
                <h4>주소</h4>
                <p>경기도 부천시 양지로 229, 골든IT타워 730호-733호(옥길동)</p>
              </li>
              <li>
                <h4>문의 전화</h4>
                <p>070-8708-8108</p>
              </li>
              <li>
                <h4>E-mail</h4>
                <p>sales@deltabot.co.kr</p>
              </li>
            </ul>
          </div>

          <div className="map-wrap">
            <img src={mapImg} alt="지도" />
          </div>
        </section>
      </div>
    </div>
  );
}

export default About;

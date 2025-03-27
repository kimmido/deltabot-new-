import React from "react";
import PageHeading from "../../components/Shared/PageHeading";
import ValuesSection from "./components/ValuesSection";
import RollingSwiper from "./components/RollingSwiper";

// import mapImg from "../../assets/images/map.png";
import Map from "./components/Map";

function About() {
  return (
    <div className="About">
      <div className="container">
        <PageHeading title="회사소개" currentPath="about" />

        <ValuesSection />

        <section
          className="intro-section"
          data-aos="fade-up"
          data-aos-anchor-placement="top-center"
          data-aos-duration="9000"
        >
          <p>
            델타봇은 로봇 자동화, 비전 시스템, 재활용 시스템, 의료, IT 등{" "}
            <br className="pc-break" />
            다양한 산업 분야에 적용 가능한 Full Line-up의 제품군을 보유하고
            있습니다.
          </p>
          <p>
            우리는 단순한 기계 판매를 넘어, 각 산업에 최적화된 맞춤형 자동화
            시스템을 설계합니다.
            <br />
            식품, 전자, 물류, 의료, 재활용 등 다양한 분야에서 델타 로봇, 스카라
            로봇, 협동 로봇 등의 <br className="pc-break" />
            첨단 장비를 활용한 스마트 생산 시스템을 구축하고 있습니다.
          </p>
          <p>
            또한, IT 인프라 구축 및 서버 자동화 기술을 통해 스마트 팩토리와
            데이터 기반의 지능형 생산 환경을 지원하며,{" "}
            <br className="pc-break" />
            안정적이고 효율적인 운영이 가능하도록 최적의 솔루션을 제공합니다.
          </p>
          <p>
            ㈜델타봇은 앞으로도 고객의 신뢰를 우선으로 하여 더욱 경쟁력 있고{" "}
            <br className="pc-break" /> 우수한 품질의 장비를 공급하고자 최선을
            다하겠습니다. 감사합니다.
          </p>
        </section>
      </div>

      <RollingSwiper />

      <div className="container">
        <section
          className="contact-section"
          data-aos="fade-up"
          data-aos-anchor-placement="center-bottom"
          data-aos-duration="9000"
        >
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
            <Map />
            {/* <img src={mapImg} alt="지도" /> */}
          </div>
        </section>
      </div>
    </div>
  );
}

export default About;

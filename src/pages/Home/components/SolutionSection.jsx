import React from "react";
import Button from "../../../components/UI/Button";

function SolutionSection() {
  // const con = [
  //   {
  //     img: backImg1,
  //     desc: "산업 현장의 생산성과 품질을 위한 로봇을 활용한 자동화 시스템",
  //   },
  //   {
  //     img: backImg2,
  //     desc: "이미지 기반으로  판단·제어하는 스마트한 기술",
  //   },
  //   {
  //     img: backImg3,
  //     desc: "환경오염을 줄이고 자원 순환을 가능하게 하는 친환경 AI",
  //   },
  //   {
  //     img: backImg4,
  //     desc: "전자 증폭과 자외선 처리를 통한 세균과 바이러스를 제거",
  //   },
  //   {
  //     img: backImg5,
  //     desc: "사람과 컴퓨터의 네트웍을 통한 디지털 미래",
  //   },
  //   {
  //     img: backImg6,
  //     desc: "기술과 2족 보행 메커니즘이 결합된 인간형 로봇",
  //   },
  // ];

  return (
    <section className="SolutionSection">
      <div className="container">
        <h2
          id="BusinessSectionTItle"
          className="section_title"
          data-aos="fade-up"
          data-aos-anchor-placement="bottom-bottom"
          data-aos-duration="9000"
        >
          솔루션
        </h2>
        <div className="item">
          <div className="title_box">
            <h5 className="title">아이템 제목</h5>
          </div>
          <p>텍스트</p>
          <div className="btn-box">
            <Button types={["pill"]}>More</Button>
          </div>
        </div>
      </div>
    </section>
  );
}

export default SolutionSection;

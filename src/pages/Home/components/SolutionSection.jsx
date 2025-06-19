import React from "react";
import { NavLink } from "react-router-dom";
import { category } from "../../../data/category";

import backImg1 from "../../../assets/images/main/main_solution(1).jpg";
import backImg2 from "../../../assets/images/main/main_solution(2).jpg";
import backImg3 from "../../../assets/images/main/main_solution(3).jpg";

function SolutionSection() {
  const solutionRoutes = category[1].sub;
  const imgList = [backImg1, backImg2, backImg3];

  const aosType = ["fade-right", "fade-up", "fade-left"];

  return (
    <section className="SolutionSection">
      <div className="intro-area container">
        <strong data-aos="fade-up">
          인공지능(AI)과 3D 비전, 로봇 가이던스 기술의 융합을 통해
          <br />
          지능화된 로봇 자동화 솔루션을 구현하는 Deltabot
        </strong>
        <p data-aos="fade-up">
          불가능이라 여겨지던 비정형 수작업 공정들에 대한 자동화를 실현하고,
          <br />
          글로벌 기업들의 생산 현장에 적용하여 양산성과 안정성을 입증해온
          Deltabot은
          <br />각 산업 공정 및 프로세스, 작업환경에 최적화된 Cell 단위의
          솔루션을 직접 설계·제작하여 제공합니다.
        </p>
      </div>

      <div className="list-area">
        <div className="container">
          <h2 className="section_title" data-aos="fade-up">
            Deltabot Solutions
          </h2>
          {/* <p data-aos="fade-right">
            Deltabot가 제공하는 비전 AI 로보틱스 솔루션은 업계 리딩 수준의 빠른
            작업 속도와 정확성을 인정받고 있습니다.
          </p> */}
          <ul className="item-list">
            {solutionRoutes.map((item, i) => (
              <li className="item" key={item.label} data-aos={aosType[i % 3]}>
                <NavLink to={`/${item.path}`}>
                  <img src={imgList[i]} alt={item.label} />
                  <div className="title-box">
                    <h5 className="title">{item.label}</h5>
                  </div>
                </NavLink>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}

export default SolutionSection;

import React from "react";
import { NavLink } from "react-router-dom";
import { category } from "../../../data/category";

import backImg1 from "../../../assets/images/page/main_solution(1).jpg";
import backImg2 from "../../../assets/images/page/main_solution(2).jpg";
import backImg3 from "../../../assets/images/page/main_solution(3).jpg";

function SolutionSection({ aosProps }) {
  const solutionRoutes = category[1].sub;
  const data = [
    {
      img: backImg1,
      title: solutionRoutes[0].label,
      path: solutionRoutes[0].path,
      aosType: "fade-right",
    },
    // {
    //   img: backImg2,
    //   title: solutionRoutes[1].label,
    //   path: solutionRoutes[0].path,
    //   aosType: "fade-up",
    // },
    {
      img: backImg3,
      title: solutionRoutes[1].label,
      path: solutionRoutes[0].path,
      aosType: "fade-left",
    },
  ];

  return (
    <section className="SolutionSection">
      <div className="intro-area container">
        <strong data-aos="fade-up" {...aosProps}>
          인공지능(AI)과 3D 비전, 로봇 가이던스 기술의 융합을 통해
          <br />
          지능화된 로봇 자동화 솔루션을 구현하는 Deltabot
        </strong>
        <p data-aos="fade-up" {...aosProps}>
          지금껏 모두가 불가능하다 생각하던 비정형 수작업 공정들에 대한 자동화를
          성공시키고,
          <br />
          글로벌 대기업들의 생산 현장에 적용하여 양산성과 안정성을 검증해내며
          성장해온 Deltabot은
          <br />각 산업 공정 및 프로세스, 작업환경에 맞춘 다양한 Cell 단위의
          솔루션들을 직접 설계 제작하여 제공합니다.
        </p>
      </div>

      <div className="list-area">
        <div className="container">
          <h2 className="section_title" data-aos="fade-up" {...aosProps}>
            Deltabot Solutions
          </h2>
          {/* <p data-aos="fade-right" {...aosProps}>
            Deltabot가 제공하는 비전 AI 로보틱스 솔루션은 업계 리딩 수준의 빠른
            작업 속도와 정확성을 인정받고 있습니다.
          </p> */}
          <ul className="item-list">
            {data.map((item, i) => (
              <li
                className="item"
                key={item.title}
                data-aos={item.aosType}
                {...aosProps}
              >
                <NavLink to={`/${item.path}`}>
                  <img src={item.img} alt={item.title} />
                  <div className="title-box">
                    <h5 className="title">{item.title}</h5>
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

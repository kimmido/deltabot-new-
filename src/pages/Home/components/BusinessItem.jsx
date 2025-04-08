import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import styles from "./BusinessSection.module.scss";
import { IconPlus } from "../../../components/icons";
import useMediaQuery from "../../../hooks/useMediaQuery";
import Button from "../../../components/UI/Button";

import backImg1 from "../../../assets/images/home/business_section(1).jpg";
import backImg2 from "../../../assets/images/home/business_section(2).jpg";
import backImg3 from "../../../assets/images/home/business_section(3).jpg";
import backImg4 from "../../../assets/images/home/business_section(4).jpg";
import backImg5 from "../../../assets/images/home/business_section(5).jpg";
import backImg6 from "../../../assets/images/home/business_section(6).jpg";

export default function BusinessItem({ sub, idx, isExpanded, setExpanded }) {
  let navigate = useNavigate();
  const isMobile = useMediaQuery("(max-width: 768px)");
  const isPC = useMediaQuery("(min-width: 1280px)");
  const con = [
    {
      img: backImg1,
      desc: "산업 현장의 생산성과 품질을 위한 로봇을 활용한 자동화 시스템",
    },
    {
      img: backImg2,
      desc: "이미지 기반으로  판단·제어하는 스마트한 기술",
    },
    {
      img: backImg3,
      desc: "환경오염을 줄이고 자원 순환을 가능하게 하는 친환경 AI",
    },
    {
      img: backImg4,
      desc: "전자 증폭과 자외선 처리를 통한 세균과 바이러스를 제거",
    },
    {
      img: backImg5,
      desc: "사람과 컴퓨터의 네트웍을 통한 디지털 미래",
    },
    {
      img: backImg6,
      desc: "기술과 2족 보행 메커니즘이 결합된 인간형 로봇",
    },
  ];

  console.log(con[idx].img);

  return (
    <div
      style={{ backgroundImage: `url("${con[idx].img}")` }}
      className={`${styles.BusinessItem} ${
        isExpanded == idx ? styles.active : ""
      }`}
      onClick={() => {
        if (isPC) {
          setExpanded(1000);
        } else {
          setExpanded(idx == isExpanded ? 1000 : idx);
        }
      }}
    >
      <div className={styles.title_box}>
        <h5 className={styles.title}>{sub.label}</h5>
        {isMobile ? <IconPlus size={32} className={styles.icon_plus} /> : ""}
      </div>
      <p>{con[idx].desc}</p>
      <div className={styles.btn}>
        <Button
          onClick={() => {
            navigate(`/${sub.path}`);
          }}
          types={["pill"]}
        >
          More
        </Button>
      </div>
    </div>
  );
}

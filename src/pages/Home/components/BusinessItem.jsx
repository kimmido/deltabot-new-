import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import styles from "./BusinessItem.module.scss";
import { IconPlus } from "../../../components/icons";
import useMediaQuery from "../../../hooks/useMediaQuery";

import backImg1 from "../../../assets/images/main/business(1).jpg";
import backImg2 from "../../../assets/images/main/business(2).jpg";
import backImg3 from "../../../assets/images/main/logistics.jpg";
import backImg4 from "../../../assets/images/main/business(3).jpg";
import backImg5 from "../../../assets/images/main/business(4).jpg";
import backImg6 from "../../../assets/images/main/business(5).jpg";

export default function BusinessItem({ sub, idx, isExpanded, setExpanded }) {
  const isPC = useMediaQuery("(min-width: 1280px)");
  const imgList = [backImg1, backImg2, backImg3, backImg4, backImg5, backImg6];

  const aosList = ["fade-right", "fade-up", "fade-left"];

  useEffect(() => {
    if (isPC) {
      setExpanded(1000);
    }
  }, [isPC]);

  return (
    <div
      style={{ backgroundImage: `url("${imgList[idx]}")` }}
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
      <div className={styles.title_box} data-aos={aosList[idx % 3]}>
        <h5 className={styles.title}>{sub.label}</h5>
        {isPC ? "" : <IconPlus size={32} className={styles.icon_plus} />}
      </div>
      <ul className={styles.category__sub__list}>
        {sub.items.map((item) => (
          <li className={styles.category__sub__item} key={item.path}>
            <NavLink
              to={`${sub.path}/${item.path}`}
              className={styles.category__sub__link}
            >
              {item.label}
            </NavLink>
          </li>
        ))}
      </ul>
    </div>
  );
}

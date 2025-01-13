import React from "react";
import BusinessCard from "./BusinessCard";
import styles from "./BusinessSection.module.scss";

function BusinessSection() {
  const categoryData = {
    title: ["자동화", "재활용", "의료", "IT"],
    sub: {
      자동화: [
        "협업로봇",
        "스카라",
        "코봇",
        "델타로봇",
        "머신비전",
        "열화상카메라",
      ],
      재활용: ["재활용시스템", "분광카메라", "조명"],
      의료: ["PCR장비", "UV장비"],
      IT: [
        "GPU서버",
        "Workstations",
        "Rack Mount Systems",
        "Military Systems",
        "Transportation Computers",
      ],
    },
  };

  return (
    <section className={styles.section}>
      <div className="container">
        <h2>사업소개</h2>
        <ul className={styles.category__list}>
          {categoryData.title.map((title, idx) => (
            <li className={styles.category__item} key={title}>
              <h5 className={styles.category__title}>{title}</h5>
              <ul className={styles.category__sub__list}>
                {categoryData.sub[title].map((item) => (
                  <li className={styles.category__sub__item} key={item}>
                    <a className={styles.category__sub__link}>{item}</a>
                  </li>
                ))}
              </ul>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

export default BusinessSection;

import React, { useContext } from "react";
import styles from "./BusinessSection.module.scss";
import { CategoryRoutesContext } from "../../../contexts/CategoryRoutesContext";
import { Link } from "react-router-dom";

function BusinessSection() {
  const category = useContext(CategoryRoutesContext);
  const route = category.find((item) => item.main.label == "사업소개");
  const subRoutes = route.sub;

  return (
    <section className={styles.section}>
      <div className="container">
        <h2 className="section_title">사업소개</h2>
        <ul className={styles.category__list}>
          {subRoutes.map((sub) => (
            <li
              key={sub.label}
              className={`trigger ${styles.category__item}`}
              data-aos="fade-up"
              data-aos-anchor-placement="center-bottom"
              data-aos-duration="9000"
            >
              <Link to={`${sub.path}/${sub.items[0].path}`}>
                <h5 className={styles.category__title}>{sub.label}</h5>
              </Link>
              <ul className={styles.category__sub__list}>
                {sub.items.map((item) => (
                  <li className={styles.category__sub__item} key={item.path}>
                    <Link
                      to={`${sub.path}/${item.path}`}
                      className={styles.category__sub__link}
                    >
                      {item.label}
                    </Link>
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

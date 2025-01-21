import React, { useContext, useEffect, useRef } from "react";
import styles from "./BusinessSection.module.scss";
import { CategoryRoutesContext } from "../../../contexts/CategoryRoutesContext";
import { Link } from "react-router-dom";
import AOS from "aos";
import "aos/dist/aos.css";

function BusinessSection() {
  const category = useContext(CategoryRoutesContext);
  const routes = category[0].sub;
  const gsapContainerRef = useRef(null);

  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <section className={styles.section}>
      <div className="container">
        <h2 className="section_title">사업소개</h2>
        <ul className={styles.category__list} ref={gsapContainerRef}>
          {routes.map((route) => (
            <li
              data-aos="fade-up"
              data-aos-anchor-placement="top-center"
              className={`trigger ${styles.category__item}`}
              key={route.label}
            >
              <h5 className={styles.category__title}>{route.label}</h5>
              <ul className={styles.category__sub__list}>
                {route.items.map((item) => (
                  <li className={styles.category__sub__item} key={item.path}>
                    <Link
                      to={`${route.path}/${item.path}`}
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

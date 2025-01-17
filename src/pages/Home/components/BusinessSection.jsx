import React, { useContext } from "react";
import styles from "./BusinessSection.module.scss";
import { CategoryRoutesContext } from "../../../contexts/CategoryRoutesContext";
import { Link } from "react-router-dom";

function BusinessSection() {
  const category = useContext(CategoryRoutesContext);
  const routes = category[0].sub;

  return (
    <section className={styles.section}>
      <div className="container">
        <h2>사업소개</h2>
        <ul className={styles.category__list}>
          {routes.map((route) => (
            <li className={styles.category__item} key={route.label}>
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

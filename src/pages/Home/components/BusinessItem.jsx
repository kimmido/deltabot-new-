import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import styles from "./BusinessSection.module.scss";
import { IconPlus } from "../../../components/icons";
import useMediaQuery from "../../../hooks/useMediaQuery";

export default function BusinessItem({ sub }) {
  const [isExpanded, setExpanded] = useState(false);
  const isMobile = useMediaQuery("(max-width: 768px)");

  useEffect(() => {
    if (!isMobile) {
      setExpanded(false);
    }
  }, [isMobile]);

  return (
    <div
      className={` ${styles.BusinessItem} ${isExpanded ? styles.active : ""}`}
    >
      <div
        className={styles.title_box}
        onClick={() => {
          if (isMobile) {
            setExpanded(!isExpanded);
          }
        }}
      >
        <h5 className={styles.title}>{sub.label}</h5>
        {isMobile ? <IconPlus size={32} className={styles.icon_plus} /> : ""}
      </div>

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
    </div>
  );
}

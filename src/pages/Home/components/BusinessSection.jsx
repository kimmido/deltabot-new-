import React, { useContext, useRef } from "react";
import styles from "./BusinessSection.module.scss";
import { CategoryRoutesContext } from "../../../contexts/CategoryRoutesContext";
import { Link } from "react-router-dom";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import ScrollTrigger from "gsap/ScrollTrigger";
gsap.registerPlugin(useGSAP, ScrollTrigger);

function BusinessSection() {
  const category = useContext(CategoryRoutesContext);
  const routes = category[0].sub;
  const gsapContainerRef = useRef(null);
  const tl = useRef();

  useGSAP(
    () => {
      // gsap.set(".box", {y: 0});
      // ScrollTrigger.batch(".trigger", {
      // interval: 0.1, // time window (in seconds) for batching to occur.
      // start: "top center", // 요소의 top이 viewport 중앙에 왔을 때
      // batchMax: 3,   // maximum batch size (targets)
      // onEnter: (batch) => gsap.to(batch, { opacity: 1, yPercent: 0 }),
      // onEnterBack: (batch) => gsap.to(batch, { opacity: 0, yPercent: 20 }),
      // also onLeave, onEnterBack, and onLeaveBack
      // also most normal ScrollTrigger values like start, end, etc.
      // });

      gsap.timeline().from(".trigger", {
        y: 200,
        opacity: 0,
        duration: 1.2,
        scrollTrigger: {
          trigger: ".trigger",
          start: "top 50%", // 요소의 top이 viewport 중앙에 왔을 때
          end: "bottom 50%",
          toggleActions: "play none none reverse",
          // scrub: 1, // 스크롤에 따라 부드럽게
          markers: true,
        },
      });
    },
    { scope: gsapContainerRef }
  );

  return (
    <section className={styles.section}>
      <div className="container">
        <h2>사업소개</h2>
        <ul className={styles.category__list} ref={gsapContainerRef}>
          {routes.map((route) => (
            <li
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

import React, { useRef, useState } from "react";
import styles from "./Nav.module.scss";
import iconHamburger from "../../assets/images/icon/icon_menu.svg";
import iconClose from "../../assets/images/icon/icon_close.svg";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
gsap.registerPlugin(useGSAP);

const Nav = () => {
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null);
  const mobileMenu = useRef(null);

  // const handleMouseEnter = (menu) => {
  //   if (window.innerWidth > 768) {
  //     setActiveDropdown(menu);
  //   }
  // };

  // const handleMouseLeave = () => {
  //   if (window.innerWidth > 768) {
  //     setActiveDropdown(null);
  //   }
  // };

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!isMobileMenuOpen);

    if (isMobileMenuOpen) gsap.to(mobileMenu.current, { xPercent: 0 });
    if (!isMobileMenuOpen) gsap.to(mobileMenu.current, { xPercent: -100 });
  };

  const menuTitle = ["사업소개", "회사소개"];
  const menuData = {
    subMenu: ["자동화", "재활용", "의료", "IT"],
  };

  return (
    <nav className={styles.gnb}>
      {/* PC 메뉴 */}
      <div className={styles.pc}>
        <div className={styles.pc__item}>
          <div className={styles.pc__link}>
            <h4 className={styles.pc__link__title}>{menuTitle[0]}</h4>
          </div>
          {menuData.subMenu.length > 0 && (
            <ul className={styles.pc__sub__list}>
              {menuData.subMenu.map((sub, idx) => (
                <li className={styles.pc__sub__item} key={sub}>
                  <h5>{sub}</h5>
                </li>
              ))}
            </ul>
          )}
        </div>
        <div className={styles.pc__item}>
          <div className={styles.pc__link}>
            <h4 className={styles.pc__link__title}>{menuTitle[1]}</h4>
          </div>
        </div>
      </div>

      {/* 모바일 메뉴 */}
      <div className={styles.mobile}>
        <button className={styles.mobile__btn} onClick={toggleMobileMenu}>
          {isMobileMenuOpen ? (
            <img src={iconClose} alt="메뉴 닫기 버튼" />
          ) : (
            <img src={iconHamburger} alt="메뉴 열기 버튼" />
          )}
        </button>
        <ul className={styles.mobile__list} ref={mobileMenu}>
          <li className={styles.mobile__item}>
            <h4>{menuTitle[0]}</h4>
            <ul className={styles.mobile__sub__list}>
              {menuData.subMenu.map((sub) => (
                <li className={styles.mobile__sub__item} key={sub}>
                  <h5>{sub}</h5>
                </li>
              ))}
            </ul>
          </li>
          <li className={styles.mobile__item}>
            <h4>{menuTitle[1]}</h4>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Nav;

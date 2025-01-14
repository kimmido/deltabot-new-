import React, { useRef, useState } from "react";
import styles from "./Nav.module.scss";
import iconHamburger from "../../assets/images/icon/icon_menu.svg";
import iconClose from "../../assets/images/icon/icon_close.svg";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
gsap.registerPlugin(useGSAP);

const MainLink = ({ className, text }) => {
  return (
    <div className={className}>
      <h4 className={styles.title}>{text}</h4>
    </div>
  );
};

const SubLink = ({ className, text, key }) => {
  return (
    <li className={className} key={key}>
      <a href="#" className={styles.sub__link}>
        <h5 className={styles.sub__title}>{text}</h5>
      </a>
    </li>
  );
};

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
          <MainLink className={styles.pc__link} text={menuTitle[0]} />
          <ul className={styles.pc__sub__list}>
            {menuData.subMenu.map((sub) => (
              <SubLink className={styles.pc__sub__item} text={sub} key={sub} />
            ))}
          </ul>
        </div>
        <div className={styles.pc__item}>
          <MainLink className={styles.pc__link} text={menuTitle[1]} />
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
        <div className={styles.mobile__list} ref={mobileMenu}>
          <div className={styles.mobile__item}>
            <MainLink className={styles.mobile__link} text={menuTitle[0]} />
            <ul className={styles.mobile__sub__list}>
              {menuData.subMenu.map((sub) => (
                <SubLink
                  className={styles.mobile__sub__item}
                  text={sub}
                  key={sub}
                />
              ))}
            </ul>
          </div>
          <div className={styles.mobile__item}>
            <MainLink className={styles.mobile__link} text={menuTitle[1]} />
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Nav;

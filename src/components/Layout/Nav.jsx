import React, { useRef, useState } from "react";
import styles from "./Nav.module.scss";
import iconHamburger from "../../assets/images/icon/icon_menu.svg";
import iconClose from "../../assets/images/icon/icon_close.svg";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { Link } from "react-router-dom";
gsap.registerPlugin(useGSAP);

const MainLink = ({
  className,
  main,
  toggleMobileMenu = () => {
    return;
  },
}) => {
  return (
    <Link to={main.path} className={className} onClick={toggleMobileMenu}>
      <h4 className={styles.title} onMouseOver={(e) => console.log(e.target)}>
        {main.label}
      </h4>
    </Link>
  );
};

const SubLink = ({
  className,
  sub,
  toggleMobileMenu = () => {
    return;
  },
}) => {
  return (
    <li className={className}>
      <Link
        to={sub.path}
        className={styles.sub__link}
        onClick={toggleMobileMenu}
      >
        <h5 className={styles.sub__title}>{sub.label}</h5>
      </Link>
    </li>
  );
};

const Nav = () => {
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isPcMenuOpen, setPcMenuOpen] = useState(false);
  const mobileMenu = useRef(null);

  const menuData = [
    {
      main: {
        label: "사업소개",
        path: "/automation",
      },
      sub: [
        {
          label: "자동화",
          path: "/automation",
        },
        {
          label: "재활용",
          path: "/recycling",
        },
        {
          label: "의료",
          path: "/medical",
        },
        {
          label: "IT",
          path: "/it",
        },
      ],
    },
    {
      main: {
        label: "회사소개",
        path: "/about",
      },
    },
  ];

  const handleMouseEnter = (data) => {
    if (data.sub && data.sub.length > 0) {
      setPcMenuOpen(true);
    }
  };

  const handleMouseLeave = () => {
    setPcMenuOpen(false);
  };

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!isMobileMenuOpen);

    if (isMobileMenuOpen) gsap.to(mobileMenu.current, { xPercent: 0 });
    if (!isMobileMenuOpen) gsap.to(mobileMenu.current, { xPercent: -100 });
  };

  return (
    <nav className={styles.gnb}>
      {/* PC 메뉴 */}
      <div className={styles.pc}>
        {menuData.map((data) => (
          <div
            key={data.main.label}
            className={`${styles.pc__item} ${isPcMenuOpen ? styles.open : ""}`}
            onMouseOver={(e) => handleMouseEnter(data)}
            onMouseLeave={(e) => handleMouseLeave()}
          >
            <MainLink className={styles.pc__link} main={data.main} />
            {data.sub && (
              <ul
                className={styles.pc__sub__list}
                onMouseOver={(e) => handleMouseEnter(data)}
                onMouseLeave={(e) => handleMouseLeave()}
              >
                {data.sub.map((sub) => (
                  <SubLink
                    key={sub.label}
                    className={styles.pc__sub__item}
                    sub={sub}
                  />
                ))}
              </ul>
            )}
          </div>
        ))}
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
          {menuData.map((data) => (
            <div className={styles.mobile__item} key={data.main.label}>
              <MainLink
                className={styles.mobile__link}
                main={data.main}
                toggleMobileMenu={toggleMobileMenu}
              />
              {data.sub && (
                <ul className={styles.mobile__sub__list}>
                  {data.sub.map((sub) => (
                    <SubLink
                      key={sub.label}
                      className={styles.mobile__sub__item}
                      sub={sub}
                      toggleMobileMenu={toggleMobileMenu}
                    />
                  ))}
                </ul>
              )}
            </div>
          ))}
        </div>
      </div>
    </nav>
  );
};

export default Nav;

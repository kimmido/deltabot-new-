import React, { useContext, useRef, useState } from "react";
import iconHamburger from "../../assets/images/icon/icon_menu.svg";
import iconClose from "../../assets/images/icon/icon_close.svg";
import { Link } from "react-router-dom";
import { CategoryRoutesContext } from "../../contexts/CategoryRoutesContext";
import gsap from "gsap";

const MainLink = ({
  className,
  main,
  onClick = () => {
    return;
  },
  mouseOver = () => {
    return;
  },
}) => {
  return (
    <Link
      to={`/${main.path}`}
      className={className}
      onClick={onClick}
      onMouseOver={mouseOver}
    >
      <h4 className="title">{main.label}</h4>
    </Link>
  );
};

const SubLink = ({
  className,
  path,
  label,
  onClick = () => {
    return;
  },
  mouseOver = () => {
    return;
  },
}) => {
  return (
    <li className={className}>
      <Link
        to={path}
        className="sub__link"
        onClick={onClick}
        onMouseOver={mouseOver}
      >
        <h5 className="sub__title">{label}</h5>
      </Link>
    </li>
  );
};

const Nav = () => {
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isPcMenuIdx, setPcMenuIdx] = useState(null);
  const mobileMenu = useRef(null);
  const category = useContext(CategoryRoutesContext);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!isMobileMenuOpen);

    if (isMobileMenuOpen) gsap.to(mobileMenu.current, { xPercent: 0 });
    if (!isMobileMenuOpen) gsap.to(mobileMenu.current, { xPercent: -100 });
  };

  return (
    <nav className="gnb">
      {/* PC 메뉴 */}
      <div className="pc" onMouseLeave={() => setPcMenuIdx(null)}>
        <div className="pc__link-wrap">
          {category.map((category, idx) => (
            <MainLink
              key={category.main.label}
              className={`pc__link ${isPcMenuIdx == idx ? "active" : ""}`}
              main={category.main}
              mouseOver={() => setPcMenuIdx(idx)}
            />
          ))}
        </div>
        <ul className={`pc__sub-wrap ${isPcMenuIdx == null ? "" : "open"}`}>
          {category.map(
            (category, idx) =>
              category.sub && (
                <li
                  key={category.main.label}
                  className={`pc__sub__list ${
                    isPcMenuIdx == idx ? "active" : "inactive"
                  }`}
                >
                  <MainLink
                    key={category.main.label}
                    className="pc__link"
                    main={category.main}
                    onClick={() => setPcMenuIdx(null)}
                  />
                  <ul>
                    {category.sub.map((sub) => (
                      <SubLink
                        key={sub.label}
                        className="pc__sub__item"
                        path={sub.path}
                        label={sub.label}
                        onClick={() => setPcMenuIdx(null)}
                      />
                    ))}
                  </ul>
                </li>
              )
          )}
        </ul>
      </div>

      {/* 모바일 메뉴 */}
      <div className="mobile">
        <button className="mobile__btn" onClick={toggleMobileMenu}>
          {isMobileMenuOpen ? (
            <img src={iconClose} alt="메뉴 닫기 버튼" />
          ) : (
            <img src={iconHamburger} alt="메뉴 열기 버튼" />
          )}
        </button>
        <div className="mobile__list" ref={mobileMenu}>
          {category.map((category) => (
            <div className="mobile__item" key={category.main.label}>
              <MainLink
                className="mobile__link"
                main={category.main}
                onClick={toggleMobileMenu}
              />
              {category.sub && (
                <ul className="mobile__sub__list">
                  {category.sub.map((sub) => (
                    <SubLink
                      key={sub.label}
                      className="mobile__sub__item"
                      path={sub.path}
                      label={sub.label}
                      onClick={toggleMobileMenu}
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

import React, { useRef, useState } from "react";
import SvgrComponents from "../icons/SvgrComponent";
import { Link, NavLink } from "react-router-dom";
import { category } from "../../data/category";
import gsap from "gsap";
import SvgrComponent from "../icons/SvgrComponent";

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
      <NavLink
        to={path}
        className="sub__link"
        onClick={onClick}
        onMouseOver={mouseOver}
      >
        <h5 className="sub__title">{label}</h5>
      </NavLink>
    </li>
  );
};

const Nav = () => {
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isPcMenuIdx, setPcMenuIdx] = useState(null);
  const mobileMenu = useRef(null);

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
          <div
            className="pc__link--home"
            onMouseEnter={() => setPcMenuIdx(null)}
          >
            <Link to="/" className="btn">
              <SvgrComponent name="icon_home" />
            </Link>
          </div>
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
            <SvgrComponents name="icon_close" />
          ) : (
            <SvgrComponents name="icon_menu_bars" />
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

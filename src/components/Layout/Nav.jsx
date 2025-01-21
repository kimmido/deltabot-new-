import React, { useContext, useRef, useState } from "react";
import iconHamburger from "../../assets/images/icon/icon_menu.svg";
import iconClose from "../../assets/images/icon/icon_close.svg";
import { Link } from "react-router-dom";
import { CategoryRoutesContext } from "../../contexts/CategoryRoutesContext";
import gsap from "gsap";
const MainLink = ({
  className,
  main,
  toggleMobileMenu = () => {
    return;
  },
}) => {
  return (
    <Link to={`/${main.path}`} className={className} onClick={toggleMobileMenu}>
      <h4 className="title" onMouseOver={(e) => console.log(e.target)}>
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
      <Link to={sub.path} className="sub__link" onClick={toggleMobileMenu}>
        <h5 className="sub__title">{sub.label}</h5>
      </Link>
    </li>
  );
};

const Nav = () => {
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isPcMenuOpen, setPcMenuOpen] = useState(false);
  const mobileMenu = useRef(null);
  const category = useContext(CategoryRoutesContext);

  const handleMouseEnter = (category) => {
    if (category.sub && category.sub.length > 0) {
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
    <nav className="gnb">
      {/* PC 메뉴 */}
      <div className="pc">
        {category.map((category) => (
          <div
            key={category.main.label}
            className={`pc__item ${isPcMenuOpen ? "open" : ""}`}
            onMouseOver={(e) => handleMouseEnter(category)}
            onMouseLeave={(e) => handleMouseLeave()}
          >
            <MainLink className="pc__link" main={category.main} />
            {category.sub && (
              <ul
                className="pc__sub__list"
                onMouseOver={(e) => handleMouseEnter(category)}
                onMouseLeave={(e) => handleMouseLeave()}
              >
                {category.sub.map((sub) => (
                  <SubLink
                    key={sub.label}
                    className="pc__sub__item"
                    sub={sub}
                  />
                ))}
              </ul>
            )}
          </div>
        ))}
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
                toggleMobileMenu={toggleMobileMenu}
              />
              {category.sub && (
                <ul className="mobile__sub__list">
                  {category.sub.map((sub) => (
                    <SubLink
                      key={sub.label}
                      className="mobile__sub__item"
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

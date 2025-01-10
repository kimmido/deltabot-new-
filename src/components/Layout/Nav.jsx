import React, { useRef, useState } from "react";
import {
  MobileMenuItem,
  MobileSubMenuItem,
  MobileMenuDropdown,
} from "./Nav.styles";
import iconHamburger from "../../assets/images/icon/icon_menu.svg";
import iconClose from "../../assets/images/icon/icon_close.svg";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
gsap.registerPlugin(useGSAP);

const Nav = () => {
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null);
  const MobileMenuWrap = useRef(null);
  const mobileMenu = useRef(null);
  const { contextSafe } = useGSAP({ scope: MobileMenuWrap });

  const handleMouseEnter = (menu) => {
    if (window.innerWidth > 768) {
      setActiveDropdown(menu);
    }
  };

  const handleMouseLeave = () => {
    if (window.innerWidth > 768) {
      setActiveDropdown(null);
    }
  };

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!isMobileMenuOpen);

    contextSafe(() => {
      gsap.to(mobileMenu.current, { xPercent: -100 });
    });
  };

  const toggleDropdown = (menu) => {
    setActiveDropdown(activeDropdown === menu ? null : menu);
  };

  const menuTitle = ["사업소개", "회사소개"];
  const menuData = {
    subMenu: ["자동화", "재활용", "의료", "IT"],
    subCategories: {
      자동화: [
        "델타로봇",
        "스카라",
        "협업로봇",
        "코봇",
        "머신비전",
        "열화상카메라",
      ],
      재활용: ["재활용시스템", "분광카메라", "조명"],
      의료: ["PCR장비", "UV장비"],
      IT: [
        "GPU서버",
        "Workstations",
        "Rack Mount Systems",
        "Military Systems",
        "Transportation Computers",
      ],
    },
  };
  // useGSAP(
  //   (context, contextSafe) => {
  //     // ✅ safe, wrapped in contextSafe() function
  //     const onClick = contextSafe(() => {
  //       gsap.to(mobileMenu.current, { xPercent: -100 });
  //     });

  //     mobileMenu.current.addEventListener("click", onClick);

  //     // 👍 we remove the event listener in the cleanup function below.
  //     return () => {
  //       // <-- cleanup
  //       mobileMenu.current.removeEventListener("click", onClick);
  //     };
  //   },
  //   { scope: gsapContainer }
  // );
  return (
    <nav className="gnb">
      {/* PC 메뉴 */}
      <div className="gnb__pc-wrap">
        <div
          className="gnb__link"
          onMouseEnter={() => handleMouseEnter(menuData.title)}
          onMouseLeave={handleMouseLeave}
        >
          <h4 className="gnb__title">{menuTitle[0]}</h4>
        </div>
        {menuData.subMenu.length > 0 && (
          <ul className="submenu">
            {menuData.subMenu.map((sub, idx) => (
              <li className="submenu__item" key={sub}>
                <h5>{sub}</h5>
                {menuData.subCategories[sub] && (
                  <div className="submenu_linkbox">
                    {menuData.subCategories[sub].map((item) => (
                      <li className="submenu__link" key={item}>
                        {item}
                      </li>
                    ))}
                  </div>
                )}
              </li>
            ))}
          </ul>
        )}
        <div className="gnb__link">
          <h4 className="gnb__title">{menuTitle[1]}</h4>
        </div>
      </div>

      {/* 모바일 메뉴 */}
      <div className="gnb__mobile-wrap" ref={MobileMenuWrap}>
        <button className="menu-icon" onClick={toggleMobileMenu}>
          {isMobileMenuOpen ? (
            <img src={iconClose} alt="메뉴 닫기 버튼" />
          ) : (
            <img src={iconHamburger} alt="메뉴 열기 버튼" />
          )}
        </button>
        <ul className="mobile-menu" ref={mobileMenu}>
          <MobileMenuItem>
            <h4>{menuTitle[0]}</h4>
            <ul>
              {menuData.subMenu.map((sub) => (
                <MobileSubMenuItem key={sub}>
                  <h5 onClick={() => toggleDropdown(sub)}>{sub}</h5>
                  {menuData.subCategories[sub] && activeDropdown === sub && (
                    <MobileMenuDropdown>
                      {menuData.subCategories[sub].map((item) => (
                        <li key={item}>{item}</li>
                      ))}
                    </MobileMenuDropdown>
                  )}
                </MobileSubMenuItem>
              ))}
            </ul>
          </MobileMenuItem>
          <MobileMenuItem>
            <h4>{menuTitle[1]}</h4>
          </MobileMenuItem>
        </ul>
      </div>
    </nav>
  );
};

export default Nav;

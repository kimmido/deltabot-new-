import React, { useEffect, useState } from "react";
import { NavWrap, MenuItems, MenuItem, SubMenu, SubMenuItem, Dropdown, MobileMenuWrap, MobileMenu, MenuIcon, MobileMenuItem, MobileSubMenu, MobileSubMenuItem, MobileMenuDropdown, MobileMenuTitle, MobileSubMenuTitle } from "./Nav.styles";
import iconHamburger from "../../assets/images/icon/icon_menu.svg"
import iconClose from "../../assets/images/icon/icon_close.svg"
import { Container } from "../../assets/styles/GlobalStyle";

const Nav = () => {
    const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);
    const [activeDropdown, setActiveDropdown] = useState(null);

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
    };

    const toggleDropdown = (menu) => {
        setActiveDropdown(activeDropdown === menu ? null : menu);
    };

    const menuTitle = ["사업소개", "회사소개"]

     const menuData = {
        subMenu: ["자동화", "재활용", "의료", "IT"],
        subCategories: {
        "자동화": ["델타로봇", "스카라", "협업로봇", "코봇", "머신비전", "열화상카메라"],
        "재활용": ["재활용시스템", "분광카메라", "조명"],
        "의료": ["PCR장비", "UV장비"],
        "IT": ["GPU서버", "Workstations", "Rack Mount Systems", "Military Systems", "Transportation Computers"],
        },
    };

  return (
    <NavWrap>
      {/* PC 메뉴 */}
        {/* <Container> */}
            <MenuItems>
                <MenuItem
                    onMouseEnter={() => handleMouseEnter(menuData.title)}
                    onMouseLeave={handleMouseLeave}
                    >
                    <h4>{menuTitle[0]}</h4>
                    {menuData.subMenu.length > 0 && (
                    <SubMenu visible={activeDropdown === menuData.title}>
                        {menuData.subMenu.map((sub) => (
                        <SubMenuItem key={sub}>
                            <h5
                            onClick={() =>
                                window.innerWidth <= 768 && toggleDropdown(sub)
                            }
                            >
                            {sub}
                            </h5>
                            {menuData.subCategories[sub] && (
                            <Dropdown>
                                {menuData.subCategories[sub].map((item) => (
                                <li key={item}>{item}</li>
                                ))}
                            </Dropdown>
                            )}
                        </SubMenuItem>
                        ))}
                    </SubMenu>
                    )}
                </MenuItem>
                <MenuItem><h4>{menuTitle[1]}</h4></MenuItem>
            </MenuItems>
        {/* </Container> */}


      {/* 모바일 메뉴 */}
      <MobileMenuWrap>
          <MenuIcon onClick={toggleMobileMenu}>
            {
            isMobileMenuOpen?
                <img src={iconClose} alt="메뉴 닫기 버튼" />
                :
                <img src={iconHamburger} alt="메뉴 열기 버튼" />
            }
            </MenuIcon>
            <MobileMenu isOpen={isMobileMenuOpen}>
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
            </MobileMenu>
      </MobileMenuWrap>
    </NavWrap>
  );
};

export default Nav;

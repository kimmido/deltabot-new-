import React, { useState } from 'react';
import logo from '/delta_logo1.png';
import styled from 'styled-components';

const Logo = styled.h1`
    max-height: 24px;
`;

const Nav = styled.nav`
  display: flex;
  flex-direction: column;
  position: relative;
`;

const MenuItems = styled.div`
  display: flex;
  gap: 20px;

  @media (max-width: 768px) {
    display: none;
  }
`;

const MenuItem = styled.div`
  position: relative;
  cursor: pointer;
`;

const SubMenu = styled.div`
  position: absolute;
  top: 100%;
  left: 0;
  background: rgba(0, 0, 0, 0.8);
  color: white;
  display: ${({ visible }) => (visible ? "flex" : "none")};
  flex-direction: column;
  padding: 10px;
`;

const SubMenuItem = styled.div`
  cursor: pointer;
  margin: 5px 0;
`;

const Dropdown = styled.div`
  margin-left: 20px;
  display: ${({ visible }) => (visible ? "block" : "none")};
`;

const MobileMenu = styled.div`
  display: none;

  @media (max-width: 768px) {
    display: block;
  }
`;

const Hamburger = styled.button`
  font-size: 24px;
  background: none;
  border: none;
  cursor: pointer;
`;

const MobileSubMenu = styled.div`
  display: flex;
  flex-direction: column;
  background: white;
  padding: 10px;
`;

const MobileSubMenuItem = styled.div`
  margin: 10px 0;
`;

const MobileDropdown = styled.div`
  margin-left: 10px;
`;
const Header = () => {
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
    
    const menuData = [
        {
        title: "사업소개",
        subMenu: ["자동화", "재활용", "의료", "IT"],
        subCategories: {
            "자동화": ["델타로봇", "스카라", "협업로봇", "코봇", "머신비전", "열화상카메라"],
            "재활용": ["재활용시스템", "분광카메라", "조명"],
            "의료": ["PCR장비", "UV장비"],
            "IT": ["GPU서버", "Workstations", "Rack Mount Systems", "Military Systems", "Transportation Computers"],
        },
        },
        {
        title: "회사소개",
        subMenu: [],
        },
    ];
      
    
    return ( 
        <>
            <Logo><img src={logo} alt="" /></Logo>
            
            <div>
                <ul>
                    <li><a href="">사업소개</a></li>
                    <li><a href="">회사소개</a></li>
                </ul>
            </div>

            <Nav>
                {/* PC 메뉴 */}
                <MenuItems>
                    {menuData.map((menu) => (
                    <MenuItem
                        key={menu.title}
                        onMouseEnter={() => handleMouseEnter(menu.title)}
                        onMouseLeave={handleMouseLeave}
                    >
                        <span>{menu.title}</span>
                        {menu.subMenu.length > 0 && (
                        <SubMenu visible={activeDropdown === menu.title}>
                            {menu.subMenu.map((sub) => (
                            <SubMenuItem key={sub}>
                                <span
                                onClick={() =>
                                    window.innerWidth <= 768 && toggleDropdown(sub)
                                }
                                >
                                {sub}
                                </span>
                                {menu.subCategories[sub] && (
                                <Dropdown visible={activeDropdown === sub}>
                                    {menu.subCategories[sub].map((item) => (
                                    <div key={item}>{item}</div>
                                    ))}
                                </Dropdown>
                                )}
                            </SubMenuItem>
                            ))}
                        </SubMenu>
                        )}
                    </MenuItem>
                    ))}
                </MenuItems>

                {/* 모바일 메뉴 */}
                <MobileMenu>
                    <Hamburger onClick={toggleMobileMenu}>☰</Hamburger>
                    {isMobileMenuOpen && (
                    <MobileSubMenu>
                        {menuData.map((menu) => (
                        <MobileSubMenuItem key={menu.title}>
                            <span>{menu.title}</span>
                            {menu.subMenu.map((sub) => (
                            <MobileSubMenuItem key={sub}>
                                <span onClick={() => toggleDropdown(sub)}>{sub}</span>
                                {menu.subCategories[sub] && activeDropdown === sub && (
                                <MobileDropdown>
                                    {menu.subCategories[sub].map((item) => (
                                    <div key={item}>{item}</div>
                                    ))}
                                </MobileDropdown>
                                )}
                            </MobileSubMenuItem>
                            ))}
                        </MobileSubMenuItem>
                        ))}
                    </MobileSubMenu>
                    )}
                </MobileMenu>
            </Nav>
        </>
    );
}
 
export default Header;
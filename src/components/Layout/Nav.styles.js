import styled, { keyframes } from "styled-components";
import iconArrow from "../../assets/images/icon/icon_keyboard_arrow_up.svg"
import imgSubMenu from "../../assets/images/sub_menu(1).jpg"
import { respondTo } from "../../assets/styles/responsive";

export const NavWrap = styled.nav`
  display: flex;
  justify-content: flex-end;
  width: 100%;

  ${respondTo('large')} {
    justify-content: center;
  }
`;

// ========= PC =========
export const MenuItems = styled.div`
  display: none;

  ${respondTo('large')} {
    display: flex;
    gap: 80px;
  }
`;

export const MenuItem = styled.div`

  h4 {
    position: relative;
    font-size: 19px;
    cursor: pointer;

    z-index: 1000;
  }
`;

export const SubMenu = styled.ul`
  position: fixed;
  top: 88px;
  left: 0;
  display: ${({ visible }) => (visible ? "flex" : "none")};
  display: flex;
  justify-content: space-between;
  gap: 24px;
  padding: 30px 24px 24px;
  width: 100%;
  height: 630px;
  background: #fff;
  border-top: 1px solid #d3d3d3;
  box-shadow: 0px 200px 50px 0 rgba(0, 0, 0, 0.4);

  z-index: 900;
`;
  
export const SubMenuItem = styled.li`
  position: relative;
  width: 100%;
  height: 520px;
  margin: 5px 0;
  padding: 0 40px; 
  color: white;
  background: 
    linear-gradient(to right,
    rgba(0, 0, 0, 0.3) 0%,
    rgba(0, 0, 0, 0.3) 100%)
    ,center / auto 100% url("${imgSubMenu}");
  border-radius: 30px;
  

  h5 {
    margin-top: 44px;
    font-size: 40px;
    cursor: pointer;
  }
  `;
    
export const Dropdown = styled.ul`
  margin-top: 48px;
  margin-left: 4px;
  // display: ${({ visible }) => (visible ? "block" : "none")};
  
  li {
    margin-top: 18px;
    font-size: 19px;
    cursor: pointer;
  }
`;


// ========= mobile =========
export const MobileMenuWrap = styled.div`
  display: block;

  ${respondTo('large')} {
    display: none;
  }
`;

export const MenuIcon = styled.button`
  position: relative;
  width: 40px;
  height: 40px;
  margin-right: -8px;

  z-index: 1000;
`;

export const MobileMenu = styled.ul`
  position: absolute;
  left: 100%;
  top: -12px;
  display: flex;
  flex-direction: column;
  width: 100vw;
  height: 100vh;
  background: white;
  padding: 64px 16px 16px;
  animation: ${({ isOpen }) => (isOpen ? slideIn : slideOut)} 0.3s forwards;

  z-index: 900;
`;

const slideIn = keyframes`
  from {
    left: 100%;
  }
  to {
    left: -16px;
  }
`;

const slideOut = keyframes`
  from {
    left: -16px;
  }
  to {
    left: 100%;
  }
`;

export const MobileMenuItem = styled.li`
  margin: 10px 0;

  h4{
    font-size: 32px;
  }
`;

export const MobileMenuTitle = styled.h4`
  font-size: 32px;
`;

export const MobileSubMenu = styled.ul`
`;
  
export const MobileSubMenuTitle = styled.h5`
`;

export const MobileSubMenuItem = styled.li`
margin-bottom: 4px;
  
  h5 {
    position: relative;
    padding: 12px 15px;
    font-size: 24px;
    background: #f9f9f9;
    border-radius: 8px;
    
    &:after {
      position: absolute;
      top: 50%;
      right: 15px;
      transform: translateY(-50%);
      display: block;
      content: '';
      width: 24px;
      height: 24px;
      background: no-repeat url("${iconArrow}");
    }
  }
`;

export const MobileMenuDropdown = styled.ul`
  margin: 0 15px;
  padding: 15px 0;

  li {
    padding: 9px 22px;
    font-size: 17px;
  }
`;

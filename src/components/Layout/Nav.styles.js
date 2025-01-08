import styled, { keyframes } from "styled-components";
import iconArrow from "../../assets/images/icon/icon_keyboard_arrow_up.svg"
import { respondTo } from "../../assets/styles/responsive";

export const NavWrap = styled.nav`
  display: flex;
  justify-content: flex-end;
  width: 100%;
`;

export const MenuItems = styled.div`
  display: none;

  ${respondTo('large')} {
    display: flex;
    gap: 20px;
  }
`;

export const MenuItem = styled.div`
  // position: relative;
  cursor: pointer;
`;

export const SubMenu = styled.div`
    position: absolute;
    top: 100%;
    left: 0;
    background: rgba(0, 0, 0, 0.8);
    color: white;
//   display: ${({ visible }) => (visible ? "flex" : "none")};
    display: flex;
    flex-direction: column;
    padding: 10px;
    z-index: 1000;
`;

export const SubMenuItem = styled.div`
  cursor: pointer;
  margin: 5px 0;
`;

export const Dropdown = styled.div`
  margin-left: 20px;
  display: ${({ visible }) => (visible ? "block" : "none")};
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
  top: 0;
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
    left: 0;
  }
`;

const slideOut = keyframes`
  from {
    left: 0;
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

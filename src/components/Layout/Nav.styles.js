import styled, { keyframes } from "styled-components";
import iconArrow from "../../assets/images/icon/icon_keyboard_arrow_up.svg"
import { respondTo } from "../../assets/styles/responsive";

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

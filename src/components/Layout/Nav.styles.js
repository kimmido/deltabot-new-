import styled, { keyframes } from "styled-components";
import iconArrow from "../../assets/images/icon/icon_keyboard_arrow_up.svg"
import { respondTo } from "../../assets/styles/responsive";

// ========= mobile =========

export const MobileMenuItem = styled.li`
  margin: 10px 0;

  h4{
    font-size: 32px;
  }
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
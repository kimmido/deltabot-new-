import React, { useState } from "react";
import styled from "styled-components";
import { respondTo } from "../../assets/styles/responsive";
import Nav from "./Nav";

const Logo = styled.h1`
  position: absolute;
  left: 16px;
  top: 50%;
  transform: translateY(-50%);
  width: 94px;
  height: 24px;
  background: no-repeat center/100% url(/delta_logo1.png);
  z-index: 1000;

  ${respondTo("large")} {
    left: 0;
    width: 148px;
    height: 38px;
  }
`;

const Header = () => {
  return (
    <header>
      <div className="container">
        <Logo></Logo>
        <Nav />
      </div>
    </header>
  );
};

export default Header;

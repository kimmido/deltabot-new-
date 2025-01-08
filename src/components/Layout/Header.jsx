import React, { useState } from 'react';
import styled from 'styled-components';
import { respondTo } from '../../assets/styles/responsive';
import Nav from './Nav';

const HeaderWrap = styled.div`
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 0 16px;
    height: 64px;
    background: #999;
    
    ${respondTo('large')} {
        padding: 0;    
    }
`;

const Logo = styled.h1`
    position: absolute;
    left: 16px;
    width: 94px;
    height: 24px;
    background: no-repeat center/100% url(/delta_logo1.png);
    z-index: 1000;

    img {
        width: 100%;
    }
`;

const Header = () => {
    return ( 
        <HeaderWrap>
            <Logo></Logo>
            <Nav />
        </HeaderWrap>
    );
}
 
export default Header;
import React, { useState } from 'react';
import styled from 'styled-components';
import { respondTo } from '../../assets/styles/responsive';
import Nav from './Nav';
import { Container } from '../../assets/styles/GlobalStyle';

const HeaderWrap = styled.header`
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 0 16px;
    height: 64px;
    
    ${respondTo('large')} {
        padding: 0;
        height: 88px;
    }
`;

const Logo = styled.h1`
    position: absolute;
    left: 0;
    top: 50%;
    transform: translateY(-50%);
    width: 94px;
    height: 24px;
    background: no-repeat center/100% url(/delta_logo1.png);
    z-index: 1000;

    ${respondTo('large')} {
        left: 0;
        width: 148px;
        height: 38px;
    }
`;

const Header = () => {
    return ( 
        <HeaderWrap>
            <Container>
                <Logo></Logo>
                <Nav />
            </Container>
        </HeaderWrap>
    );
}
 
export default Header;
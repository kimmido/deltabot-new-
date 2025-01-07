import React from 'react';
import logo from '/delta_logo1.png';
import styled from 'styled-components';


const Header = () => {
    const Logo = styled.h1`
        max-height: 24px;
    `;

    return ( 
        <>
            <Logo><img src={logo} alt="" /></Logo>
            
            <div>
                <ul>
                    <li><a href="">사업소개</a></li>
                    <li><a href="">회사소개</a></li>
                </ul>
            </div>
        </>
    );
}
 
export default Header;
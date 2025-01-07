import React from 'react';
import logo from '/delta_logo1.png';

const Header = () => {
    return ( 
        <>
            <h1><img src="/delta_logo1.png" alt="logo" /></h1>
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
import styled, { createGlobalStyle } from 'styled-components';
import { respondTo } from './responsive';

const GlobalStyles = createGlobalStyle`
//     @import url("https://cdn.jsdelivr.net/gh/orioncactus/pretendard@v1.3.9/dist/web/variable/pretendardvariable-dynamic-subset.min.css");

//     *{
//         margin: 0;
//         padding: 0; 
//         box-sizing: border-box;
//     }

//     html, body{
//         -webkit-text-size-adjust : none; 
//         -ms-text-size-adjust : none; 
//         -moz-text-size-adjust : none; 
//         -o-text-size-adjust : none;
//     }

//     body {
//         overflow-x: hidden;
//         color: 1d1d1d;
//         font-size: 17px;
//         font-family: "Pretendard Variable", Pretendard, -apple-system, BlinkMacSystemFont, system-ui, Roboto, "Helvetica Neue", "Segoe UI", "Apple SD Gothic Neo", "Noto Sans KR", "Malgun Gothic", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
//     }

//     #root {
//         width: 100%;
//     }

//     dl,
//     ul,
//     ol,
//     li {
//         list-style: none;
//     }

//     input, 
//     select, 
//     textarea { 
//         font-size: 100%;
//         vertical-align: middle;
//         border: none;
//         -moz-user-select: auto;
//         -webkit-user-select: auto;
//         -ms-user-select: auto;
//         user-select: auto;
//     }

//     input:focus {
//         outline: none;
//     }

//     button {
//         border: none;
//         background: none;
//         padding: 0;
//         vertical-align: middle;
//         font-size: 100%;
//         cursor: pointer;
//     }

//     a{
//         text-decoration: none;
//         color: inherit;
//     }

//     address {
//         font-style: normal;
//     }
`;

export default GlobalStyles;

export const Container = styled.div`
    position: relative;
    width: 100%;
    max-width: 1440px;
    margin: 0 auto;
    padding: 0 16px;

    ${respondTo('large')} {
        padding: 0 24px;
    }
`;
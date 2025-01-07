import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`
    *{
        margin: 0;
        padding: 0; 
        box-sizing: border-box;
    }

    html, body{
        -webkit-text-size-adjust : none; 
        -ms-text-size-adjust : none; 
        -moz-text-size-adjust : none; 
        -o-text-size-adjust : none;
    }

    html {
        font-size: 17px;
        color: 1d1d1d;
    }

    #root {
        width: 100%;
    }

    dl,
    ul,
    ol,
    li {
        list-style: none;
    }
        
    input, 
    select, 
    textarea { 
        font-size: 100%;
        vertical-align: middle;
        border: none;
        -moz-user-select: auto;
        -webkit-user-select: auto;
        -ms-user-select: auto;
        user-select: auto;
    }

    input:focus {
        outline: none;
    }

    button {
        border: none;
        background: none;
        padding: 0;
        vertical-align: middle;
        font-size: 100%;
        cursor: pointer;
    }

    a{
        text-decoration: none;
        color: inherit;
    }

    address {
        font-style: normal;
    }
`;

export default GlobalStyles;
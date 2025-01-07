import React from 'react';
import Header from '../../components/Layout/Header';
import Slide from './components/Slide';
import styled from 'styled-components';

const Main = styled.div`
    margin: 0 auto;
    padding: 24px;
    width: 1440px;
    background: #f3f3f3
`;


const MainPage = () => {
    return ( 
        <Main>
        <Header />
        <Slide />
        <strong>델타봇은 로봇산업의 선두 주자로 발돋움해 나갈 것 입니다.</strong>
        </Main>
     );
}
 
export default MainPage;
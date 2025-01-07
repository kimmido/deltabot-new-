import React from 'react';
import Header from '../../components/Layout/Header';
import Slide from './components/Slide';
import styled from 'styled-components';
import BusinessSection from './components/BusinessSection';

const Main = styled.div`
    margin: 0 auto;
    padding: 24px;
    width: 1440px;
    background: #f3f3f3
`;

const DisplayText = styled.strong`
    display: block;
    margin: 40vh 0;
    font-size: 66px;
    line-height: 80px;
`;


const MainPage = () => {
    return ( 
        <Main>
        <Header />
        <Slide />
        <DisplayText>델타봇은<br />로봇산업의 선두 주자로<br />발돋움해 나갈 것 입니다.</DisplayText>
        <BusinessSection />
        </Main>
     );
}
 
export default MainPage;
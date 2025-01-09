import React from "react";
import Header from "../../components/Layout/Header";
import Slide from "./components/Slide";
import styled from "styled-components";
import BusinessSection from "./components/BusinessSection";
import { respondTo } from "../../assets/styles/responsive";

const Main = styled.div`
  padding-top: 64px;
  // background: #f3f3f3

  ${respondTo("medium")} {
    padding-top: 88px;
  }
`;

const DisplayText = styled.strong`
  display: block;
  margin: 30vh 0;
  font-size: 32px;

  ${respondTo("medium")} {
    margin: 40vh 0;
    font-size: 66px;
    line-height: 80px;
  }
`;

const MainPage = () => {
  return (
    <Main>
      <Header />
      <Slide />
      <div className="container">
        <DisplayText>
          델타봇은
          <br />
          로봇산업의 선두 주자로
          <br />
          발돋움해 나갈 것 입니다.
        </DisplayText>
        <BusinessSection />
      </div>
    </Main>
  );
};

export default MainPage;

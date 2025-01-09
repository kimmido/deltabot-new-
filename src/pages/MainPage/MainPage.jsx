import React from "react";
import Header from "../../components/Layout/Header";
import Footer from "../../components/Layout/Footer";
import Slide from "./components/Slide";
import styled from "styled-components";
import BusinessCard from "./components/BusinessCard";
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
          <p>델타봇은</p>
          <p>로봇산업의 선두 주자로</p>
          <p>발돋움해 나갈 것 입니다.</p>
        </DisplayText>

        <section className="business-section">
          <h2>사업소개</h2>
          <div className="business__card-grid">
            <BusinessCard position={"pos1"} />
            <BusinessCard position={"pos2"} />
            <BusinessCard position={"pos3"} />
            <BusinessCard position={"pos4"} />
          </div>
        </section>
      </div>
      <Footer />
    </Main>
  );
};

export default MainPage;

import React from "react";
import { Link } from "react-router-dom";
import SvgrComponents from "../icons/SvgrComponent";

function Footer() {
  return (
    <footer>
      <div className="ft__inner container">
        <div className="connect">
          <p>
            스마트한 자동화 솔루션으로 <br />
            생산성을 높이는 최고의 파트너
          </p>
          <a href="tel:07087088108">
            <span>문의하기</span>
            <span className="call-icon"></span>
          </a>
        </div>
        <div className="ft-info">
          <p className="flex-container">
            <span className="dt">Tel</span>
            <a className="dd" href="tel:07087088108">
              070-8708-8108
            </a>
          </p>
          <p className="flex-container">
            <span className="dt">E-mail</span>
            <span className="dd">sales@deltabot.co.kr</span>
          </p>
          <address className="flex-container">
            <span className="dt">주소</span>
            <span className="dd">
              경기도 부천시 소사구 양지로 229, 골든IT타워 730호-733호(옥길동)
            </span>
          </address>
          <p className="flex-container">
            <span className="dt">사업자등록번호</span>
            <span className="dd">113-86-85861</span>
          </p>
          <p className="flex-container">
            <span className="dt">대표자</span>
            <span className="dd">박현식</span>
          </p>
        </div>
        <h2 className="logo">
          <Link to="/">
            <img src="/images/branding/logo.svg" alt="로고" />
          </Link>
        </h2>
        <p className="copyright">COPYRIGHT(C) DELTABOT. ALL RIGHTS RESERVED</p>
      </div>
    </footer>
  );
}

export default Footer;

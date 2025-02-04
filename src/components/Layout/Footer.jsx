import React from "react";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <footer>
      <div className="footer__inner container">
        <h2 className="logo">
          <Link to="/">
            <img src="/images/delta_logo1.png" alt="로고" />
          </Link>
        </h2>
        <div className="company-info">
          <p className="flex-container">
            <span className="head">TEL</span>
            <a href="tel:07087088108">070-8708-8108</a>
          </p>
          <p className="flex-container">
            <span className="head">E-mail</span>
            <span>sales@daltabot.co.kr</span>
          </p>
          <address className="flex-container">
            <span className="head">주소</span>
            <span>경기도 부천양지로 229, 골든IT타워 730호~733호(옥길동)</span>
          </address>
          <p className="flex-container">
            <span className="head">사업자등록번호</span>
            <span>113-86-85861</span>
          </p>
          <p className="flex-container">
            <span className="head">대표자</span>
            <span>박현식</span>
          </p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;

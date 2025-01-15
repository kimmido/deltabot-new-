import React from "react";

function Footer() {
  return (
    <footer>
      <section className="company-info">
        <h2>회사 정보</h2>
        <p>
          <strong>대표자:</strong> 박현식
        </p>
        <p>
          <strong>사업자등록번호:</strong> 113-86-85861
        </p>
        <p>
          <strong>TEL:</strong> 070-8708-8108 | <strong>E-mail:</strong>{" "}
          <a href="mailto:sales@daltabot.co.kr">sales@daltabot.co.kr</a>
        </p>
        <address>
          <p>
            <strong>주소:</strong> 경기도 부천양지로 229, 골든IT타워
            730호~733호(옥길동)
          </p>
        </address>
      </section>
      <section>
        <h2>로고</h2>
        <img src="/delta_logo1.png" alt="로고" />
      </section>
    </footer>
  );
}

export default Footer;

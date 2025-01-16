import React from "react";

function Business({ currentPath, productData }) {
  //   const [htmlContent, setHtmlContent] = useState("");
  //   const [filePath, setFilePath] = useState("excel_test.htm");

  //   useEffect(() => {
  //     fetch(filePath)
  //       .then((response) => response.text())
  //       .then((data) => setHtmlContent(data));
  //   }, [filePath]);

  return (
    <div>
      <div className="product">
        <h3>제품목록</h3>
        <ul>
          <li>
            <img src="" alt={"제품이미지" + currentPath} />
            <p>제품이름</p>
          </li>
          <li>
            <img src="" alt={"제품이미지" + currentPath} />
            <p>제품이름</p>
          </li>
          <li>
            <img src="" alt={"제품이미지" + currentPath} />
            <p>제품이름</p>
          </li>
          <li>
            <img src="" alt={"제품이미지" + currentPath} />
            <p>제품이름</p>
          </li>
        </ul>
        <div>
          <div>
            <img src="" alt="제품이미지" />
            <strong>제품이름</strong>
            <p>우수한 성능, 효율성 우선</p>
            <p>최고의 안전성, 포괄적인 보증</p>
            <p>유연한 배포, 사용 용이성</p>
            <p>효율적인 보호, 탁월한 신뢰성</p>
            <p>건전한 생태계, 완전한 권한 부여</p>
            <button>Specifications</button>
            {/* <div dangerouslySetInnerHTML={{ __html: htmlContent }}>Specifications 표 들어올 자리</div> */}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Business;

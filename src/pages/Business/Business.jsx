import React, { useEffect } from "react";

function Business({ currentPath, productData = [] }) {
  //   const [htmlContent, setHtmlContent] = useState("");
  //   const [filePath, setFilePath] = useState("excel_test.htm");

  //   useEffect(() => {
  //     fetch(filePath)
  //       .then((response) => response.text())
  //       .then((data) => setHtmlContent(data));
  //   }, [filePath]);

  useEffect(() => {
    console.log(productData);
  }, [productData]);

  return (
    <div>
      <div>
        <p>데이터 원본</p>
      </div>
      <div className="product">
        <h3>제품목록</h3>
        <ul>
          {productData.map((d) => (
            <li key={d.name}>
              <img src="" alt={"제품이미지" + currentPath + d.code} />
              <p>{d.name}</p>
            </li>
          ))}
        </ul>
        <div>
          {productData.map((d) => (
            <div key={d.name}>
              <img src="" alt={"제품이미지" + currentPath + d.code} />
              <strong>{d.name}</strong>
              <ul>
                {d.features.map((feature) => (
                  <li>{feature}</li>
                ))}
              </ul>
              <button>Specifications</button>
              {/* <div dangerouslySetInnerHTML={{ __html: htmlContent }}>Specifications 표 들어올 자리</div> */}
            </div>
          ))}
          <div></div>
        </div>
      </div>
    </div>
  );
}

export default Business;

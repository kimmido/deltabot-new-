import React, { useEffect, useState } from "react";
import AssetImage from "../../components/UI/AssetImage";

function Business({ currentPath, productData = [{ items: [] }] }) {
  //   const [htmlContent, setHtmlContent] = useState("");
  //   const [filePath, setFilePath] = useState("excel_test.htm");
  const [currentIdx, setCurrentIdx] = useState(0);

  //   useEffect(() => {
  //     fetch(filePath)
  //       .then((response) => response.text())
  //       .then((data) => setHtmlContent(data));
  //   }, [filePath]);

  useEffect(() => {
    console.log(productData);
  }, [productData]);

  const handleTabChange = (idx) => {
    // navigate(`/${currentCategory}/${path}`);
  };

  return (
    <div>
      <div className="tab-menu">
        {productData.map((data, idx) => (
          <button
            key={idx}
            className={`tab-item ${currentIdx === idx ? "active" : ""}`}
            onClick={() => {
              setCurrentIdx(idx);
            }}
          >
            {data.title}
          </button>
        ))}
      </div>
      <div className="product">
        <h3>제품목록</h3>
        <div className="product-scroll">
          {productData[currentIdx].items.map((item, idx) => (
            <button key={idx} className="product-scroll__button">
              <AssetImage
                filePath={`product/${currentPath}/${item.name}.png`}
                alt={item.name}
              />
              <p>{item.name}</p>
            </button>
          ))}
        </div>
        <div>
          {productData[currentIdx].items.map((item, idx) => (
            <div key={idx}>
              <AssetImage
                filePath={`product/${currentPath}/${item.name}.png`}
                alt={item.name}
              />
              <strong>{item.name}</strong>
              <ul>
                {item.features.map((feature) => (
                  <li>{feature}</li>
                ))}
              </ul>
              <button>Specifications</button>
              {/* <div dangerouslySetInnerHTML={{ __html: htmlContent }}>
                Specifications 표 들어올 자리
              </div> */}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Business;

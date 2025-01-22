import React, { useEffect, useState } from "react";
import AssetImage from "../../components/UI/AssetImage";

function Business({ currentPath, productData = [] }) {
  //   const [htmlContent, setHtmlContent] = useState("");
  //   const [filePath, setFilePath] = useState("excel_test.htm");
  const [currentIdx, setCurrentIdx] = useState(0);

  console.log("currentPath:" + currentPath);
  console.log(productData);
  // console.log(currentData);
  console.log("currentIdx:" + currentIdx);

  useEffect(() => {
    setCurrentIdx(0);
    console.log(1);
  }, [currentPath]);

  const handleScroll = (idx) => {
    // navigate(`/${currentCategory}/${path}`);
  };

  return (
    <div>
      {console.log("el")}
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
          {productData[currentIdx] &&
            productData[currentIdx].items.map((item, idx) => (
              <button key={idx} className="product-scroll__button">
                <AssetImage
                  filePath={`product/${currentPath}/${item.code}.png`}
                  alt={item.name}
                />
                <p>{item.name}</p>
              </button>
            ))}
        </div>
        <div>
          {productData[currentIdx] &&
            productData[currentIdx].items.map((item, idx) => (
              <div key={idx}>
                <AssetImage
                  filePath={`product/${currentPath}/${item.code}.png`}
                  alt={item.name}
                />
                <strong>{item.name}</strong>
                <ul>
                  {item.features.map((feature, idx) => (
                    <li key={idx}>{feature}</li>
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

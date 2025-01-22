import React, { useEffect, useState, useRef } from "react";
import AssetImage from "../../components/UI/AssetImage";

function Business({ currentPath, productData = [] }) {
  //   const [htmlContent, setHtmlContent] = useState("");
  //   const [filePath, setFilePath] = useState("excel_test.htm");
  const [currentIdx, setCurrentIdx] = useState(0);

  const itemsRef = useRef(null);
  const [catList, setCatList] = useState(productData);

  function scrollTo(el) {
    const map = getMap();
    const node = map.get(el);
    node.scrollIntoView({
      behavior: "smooth",
      block: "center",
      // inline: "center",
    });
  }

  function getMap() {
    if (!itemsRef.current) {
      // 처음 사용하는 경우, Map을 초기화합니다.
      itemsRef.current = new Map();
    }
    return itemsRef.current;
  }

  useEffect(() => {
    setCurrentIdx(0);
  }, [currentPath]);

  const handleScroll = (idx) => {
    // navigate(`/${currentCategory}/${path}`);
  };

  return (
    <div>
      <div className="tab-menu">
        {productData.map((data, idx) => (
          <button
            key={data.title}
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
              <button
                key={item.code}
                className="product-scroll__button"
                onClick={() => {
                  scrollTo(item);
                }}
              >
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
              <div
                key={item.code}
                ref={(node) => {
                  const map = getMap();
                  if (node) {
                    map.set(item, node); // Mount 시
                  } else {
                    map.delete(item); // Unmount 시
                  }
                }}
              >
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

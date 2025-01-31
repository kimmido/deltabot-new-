import React, { useEffect, useState, useRef } from "react";
import AssetImage from "../../components/UI/AssetImage";

function Business({ currentPath, productData = [] }) {
  const [currentIdx, setCurrentIdx] = useState(0);
  // const [htmlContent, setHtmlContent] = useState("");
  // const [filePath, setFilePath] = useState("/spec/테스트02.htm");

  const itemsRef = useRef(null);

  // useEffect(() => {
  //   fetch(filePath)
  //     .then((response) => response.text())
  //     .then((data) => setHtmlContent(data));
  // }, [filePath]);

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

  return (
    <div className="Business">
      <div className="flex-container">
        <div className="child-tab">
          {productData.map((data, idx) => (
            <button
              key={data.title}
              className={`child-tab__item ${
                currentIdx === idx ? "active" : ""
              }`}
              onClick={() => {
                setCurrentIdx(idx);
              }}
            >
              {data.title}
            </button>
          ))}
        </div>
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
                <img
                  src={`/images/product/${currentPath}/${item.code}.png`}
                  alt={item.name}
                />
                <div className="subject">
                  <p className="sbtxt">{item.name}</p>
                  <span></span>
                </div>
              </button>
            ))}
        </div>
      </div>
      <div className="product__detail">
        {productData[currentIdx] &&
          productData[currentIdx].items.map((item, idx) => (
            <div
              key={item.code}
              className="product__detail-inner"
              ref={(node) => {
                const map = getMap();
                if (node) {
                  map.set(item, node); // Mount 시
                } else {
                  map.delete(item); // Unmount 시
                }
              }}
            >
              <div className="pd_flex">
                <img
                  className="pd_left"
                  src={`/images/product/${currentPath}/${item.code}.png`}
                  alt={item.name}
                />
                <div className="pd_right">
                  <strong className="prod_name">{item.name}</strong>
                  <div className="prod_desc">
                    {item.features.map((feature, idx) => (
                      <div key={idx} className="prod_desc__inner">
                        {feature.title == "null" || (
                          <p className="prod_desc__title">{feature.title}</p>
                        )}
                        <ul>
                          {feature.texts.map((text) => (
                            <li key={text}>{text}</li>
                          ))}
                        </ul>
                      </div>
                    ))}
                    <button>
                      <span className="text">Specifications</span>
                      <span className="icon"></span>
                    </button>
                  </div>
                </div>
              </div>
              <div
                className="spec-container"
                // dangerouslySetInnerHTML={{ __html: htmlContent }}
              ></div>
            </div>
          ))}
      </div>
    </div>
  );
}

export default Business;

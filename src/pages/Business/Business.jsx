import React, { useEffect, useState, useRef } from "react";
import AssetImage from "../../components/UI/AssetImage";

function Business({ currentPath, productData = [] }) {
  const [currentIdx, setCurrentIdx] = useState(0);
  const [specOpen, setSpecOpen] = useState(null);

  const itemsRef = useRef(null);

  function scrollTo(el) {
    const map = getMap();
    const node = map.get(el);
    node.scrollIntoView({
      behavior: "smooth",
      block: "start",
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
    setSpecOpen(null);
  }, [currentPath]);

  const openSpec = (id) => {
    setSpecOpen((prev) => (prev === id ? null : id));
  };

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
                setSpecOpen(null);
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
                <div className="pd_left">
                  <img
                    src={`/images/product/${currentPath}/${item.code}.png`}
                    alt={item.name}
                  />
                </div>
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
                    <button
                      className={specOpen === idx && "active"}
                      onClick={() => openSpec(idx)}
                    >
                      <span className="text">SPECIFICATION</span>
                      <span className="icon"></span>
                      <span className="effect"></span>
                    </button>
                  </div>
                </div>
              </div>
              <div className="spec-container">
                {specOpen === idx && (
                  <div>
                    <p>SPECIFICATION</p>
                    <img
                      src={`/images/product/${currentPath}/${item.code}_info.jpg`}
                      alt={item.code}
                    />
                  </div>
                )}
              </div>
            </div>
          ))}
      </div>
    </div>
  );
}

export default Business;

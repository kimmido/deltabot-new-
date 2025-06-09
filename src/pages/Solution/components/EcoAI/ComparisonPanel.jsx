import React from "react";

function ComparisonPanel({ data }) {
  const aosProps = {
    "data-aos-offset": "50",
    "data-aos-delay": "100",
    "data-aos-duration": "2000",
    "data-aos-easing": "linear",
  };

  return (
    <div className="ComparisonPanel">
      <div className="head flex-container">
        <div className="flex-l">
          <img src={data.head[0].img} alt="수작업" />
          <p>{data.head[0].caption}</p>
        </div>
        <p className="flex-c vs">VS</p>
        <div className="flex-r">
          <img src={data.head[1].img} alt="수작업" />
          <p>{data.head[1].caption}</p>
        </div>
      </div>

      {data.chart.map((data) => (
        <div className="chart-item flex-container">
          <div className="chart-bar chart-bar__1 flex-l">
            <p>{data.items[0].text}</p>
            <span
              data-aos="fill-up-custom"
              {...aosProps}
              style={{ width: data.items[0].per }}
            ></span>
          </div>
          <p className="title flex-c">{data.head}</p>
          <div className="chart-bar chart-bar__2 flex-r">
            <p>{data.items[1].text}</p>
            <span
              data-aos="fill-up-custom"
              {...aosProps}
              style={{ width: data.items[1].per }}
            ></span>
          </div>
        </div>
      ))}
    </div>
  );
}

export default ComparisonPanel;

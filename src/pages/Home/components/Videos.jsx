import React from "react";

function Videos() {
  return (
    <section className="Videos">
      <div className="container">
        <h2>Our Video</h2>
        <div className="flex-box">
          <video controls preload="none">
            <source src="" />
          </video>
          <div>
            <p>DELTABOT PROJECT VIDEOS</p>
            <button>PET Positive Sort AMP Customer Facility Footage</button>
            <button>PET Clear QC</button>
            <button>델타로봇을 이용한 자동화라인</button>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Videos;

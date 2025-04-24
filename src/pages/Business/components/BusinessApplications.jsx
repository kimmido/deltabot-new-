import React from "react";

function BusinessApplications({ data }) {
  return (
    <div className="BusinessApplications">
      <strong className="sec-title">응용 분야</strong>
      <ul className="app-list">
        {data.applications.map((app, idx) => (
          <li key={idx} className="app-item">
            <div className="img-box">
              <img
                src={`/images/business/${app.image}`}
                alt={`응용분야-${app.title}`}
              />
            </div>
            <div className="text-box">
              <strong>{app.title}</strong>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default BusinessApplications;

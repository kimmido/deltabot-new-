import React from "react";
import VideoDefault from "../../../components/UI/VideoDefault";

function BusinessApplications({ data }) {
  const type = data.applications[0].video ? "video" : "image";

  return (
    <div className="BusinessApplications">
      <strong className="sec-title">Applications</strong>
      <ul className={`app-list ${type}`}>
        {data.applications.map((app, idx) => (
          <li key={idx} className="app-item">
            <div className="media-box">
              {type == "image" ? (
                <img
                  src={`/images/business/${app.image}`}
                  alt={`응용분야-${app.title}`}
                />
              ) : (
                <VideoDefault
                  src={`/videos/sub/${app.video}`}
                  poster={`/images/video_poster/${app.poster}`}
                />
              )}
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

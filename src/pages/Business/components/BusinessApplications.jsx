import React from "react";
import VideoPreviewPlayer from "../../../components/UI/VideoPreviewPlayer";

function BusinessApplications({ data }) {
  const type = data.applications[0].video ? "video" : "image";

  return (
    <div className="BusinessApplications">
      <strong className="sec-title">Applications</strong>
      <ul
        className={`app-list grid-block ${
          type == "image" ? "grid-block--three-col" : "grid-block--two-col"
        }`}
      >
        {data.applications.map((app, idx) => (
          <li key={idx} className="grid-block__item">
            <div className="grid-block__thumb card">
              {type == "image" ? (
                <img
                  src={`/images/business/${app.image}`}
                  alt={`응용분야-${app.title}`}
                />
              ) : (
                <VideoPreviewPlayer
                  key={app.video}
                  src={`/videos/page/${app.video}`}
                  poster={`/images/video_poster/${app.poster}`}
                  ratio={1.618 / 1}
                />
              )}
            </div>
            <div className="grid-block__text-box">
              <strong className="grid-block__title">{app.title}</strong>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default BusinessApplications;

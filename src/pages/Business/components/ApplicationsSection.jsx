import React from "react";
import VideoPreviewPlayer from "../../../components/UI/VideoPreviewPlayer";
import { IconArrow } from "../../../components/icons";
import { Link } from "react-router-dom";

function ApplicationsSection({ data }) {
  return (
    <section className="ApplicationsSection">
      <div className="ApplicationsSection__cnt">
        <strong className="sec-title">Applications</strong>
        <ul className={`grid-block grid-block--${data.col}-col`}>
          {data.list.map((app, idx) => (
            <li key={idx} className="grid-block__item">
              <div className="grid-block__thumb card">
                {data.type == "image" ? (
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

      {data.link && (
        <Link
          to={data.link.path}
          state={{ posId: data.link.posId }}
          className="ApplicationsSection__link btn-pill"
        >
          <span>{data.link.label}</span>
          <IconArrow size="20" weight="1" />
        </Link>
      )}
    </section>
  );
}

export default ApplicationsSection;

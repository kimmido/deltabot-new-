import React from "react";
import VideoPreviewPlayer from "../../../../components/UI/VideoPreviewPlayer";

function AutomationVideos({ videos }) {
  return (
    <section className="AutomationVideos">
      {videos.map((item) => (
        <article className="short" key={item.title}>
          <div className="short_l i1">
            <VideoPreviewPlayer src={item.videoSrc} poster={item.poster} />
          </div>
          <div className="short_r">
            <div className="texts">
              <h3>{item.title}</h3>
              <p>{item.text}</p>
            </div>
            <ul className="effect-list">
              {item.effects.map((effect) => (
                <li key={effect.title}>
                  <div className="icon-box">
                    <img
                      src={`/images/icon/${effect.iconName}.png`}
                      alt={`${effect.iconName}`}
                    />
                  </div>
                  <p>{effect.text}</p>
                </li>
              ))}
            </ul>
          </div>
        </article>
      ))}
    </section>
  );
}

export default AutomationVideos;

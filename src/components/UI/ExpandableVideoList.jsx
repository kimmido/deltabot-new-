import React from "react";
import ExpandableVideoPanel from "./ExpandableVideoPanel";

function ExpandableVideoList({ videos }) {
  return (
    <div className="ExpandableVideoList">
      {videos.map((video) => (
        <ExpandableVideoPanel key={video.title} {...video} />
      ))}
    </div>
  );
}

export default ExpandableVideoList;

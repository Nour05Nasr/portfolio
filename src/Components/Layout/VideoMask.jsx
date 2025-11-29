import React from "react";
import bgvideo from "../../Assets/bgvideo.mp4";
import wave from "../../Assets/wave.svg";
import "./VideoMask.css";

const VideoMask = () => {
  return (
 <div className="svg-mask-wrapper">
      <svg viewBox="0 0 500 500" className="svg-mask">
        <defs>
          <clipPath id="svg-clip">
            <img src={wave} width="100%" height="100%" />
          </clipPath>
        </defs>

        <foreignObject
          width="100%"
          height="100%"
          clipPath="url(wave)"
        >
          <video
            src={bgvideo}
            autoPlay
            muted
            loop
            playsInline
            className="masked-video"
          />
        </foreignObject>
      </svg>
    </div>
  );
}
export default VideoMask;

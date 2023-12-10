import React from "react";
import YouTube from "react-youtube";
// import ReactPlayer from "react-player/youtube";

const Video = () => {
  return (
    <div>
      <video
        controls="true"
        style={{ height: "30em", display: "flex", margin: "0 0 0 19em" }}
        src="https://www.youtu.be/K0KI1dKMTXQ?si=y6j51XwXKCkDZaQz"
      ></video>
      <YouTube videoId="y6j51XwXKCkDZaQz" />
    </div>
  );
};

export default Video;

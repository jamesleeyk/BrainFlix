import React from 'react';
import './VideoPlayer.scss';

function VideoPlayer(props) {
  return (
    <>
      <section className="video">
        <video
          className="video__poster"
          controls
          poster={props.videoDetails[0].image}
        ></video>
      </section>
    </>
  );
}

export default VideoPlayer;

import React from 'react';
import './VideoPlayer.scss';

function VideoPlayer(props) {
  return (
    <>
      <section className="video">
        <video
          className="video__poster"
          controls
          poster={props.currentVideo.image}
        ></video>
      </section>
    </>
  );
}

export default VideoPlayer;

import React from 'react';
import { Link } from 'react-router-dom';
import './VideoList.scss';

function VideoList(props) {
  return (
    <section className="videoList">
      <h4 className="videoList__header">NEXT VIDEO</h4>
      <ul className="videoList__list">
        {props.videos
          .filter((video) => video.id !== props.currentVideo.id)
          .map((video) => (
            <li className="videoList__item" key={video.id}>
              <Link to={`/videos/${video.id}`}>
                <div className="videoList__img-div">
                  <img src={video.image} alt="" className="videoList__img" />
                </div>
              </Link>
              <div className="videoList__text-div">
                <h4 className="videoList__title">{video.title}</h4>
                <h4 className="videoList__author">{video.channel}</h4>
              </div>
            </li>
          ))}
      </ul>
    </section>
  );
}

export default VideoList;

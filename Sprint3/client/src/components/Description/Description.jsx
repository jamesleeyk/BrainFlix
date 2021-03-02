import React from 'react';
import './Description.scss';

// import icons
import viewsIcon from '../../assets/Icons/Icon-views.svg';
import likesIcon from '../../assets/Icons/Icon-likes.svg';

function Description(props) {
  return (
    <section className="description">
      <div className="description__intro">
        <h2 className="description__title">{props.currentVideo.title}</h2>
        <div className="description__info-div">
          <div className="description__authorInfo">
            <p className="description__author">By {props.currentVideo.channel}</p>
            <p className="description__date">
              {new Date(props.currentVideo.timestamp).toLocaleDateString()}
            </p>
          </div>
          <div className="description__viewsLikes">
            <div className="description__views">
              <img src={viewsIcon} alt="" className="description__views-img" />
              <p className="description__views-text">{props.currentVideo.views}</p>
            </div>
            <div className="description__likes">
              <img src={likesIcon} alt="" className="description__likes-img" />
              <p className="description__likes-text">{props.currentVideo.likes}</p>
            </div>
          </div>
        </div>
      </div>
      <div className="description__text">{props.currentVideo.description}</div>
    </section>
  );
}

export default Description;

import React from 'react';
import './Description.scss';

// import icons
import viewsIcon from '../../assets/Icons/Icon-views.svg';
import likesIcon from '../../assets/Icons/Icon-likes.svg';

function Description(props) {
  return (
    <section className="description">
      <div className="description__intro">
        <h2 className="description__title">{props.videoDetails[0].title}</h2>
        <div className="description__info-div">
          <div className="description__authorInfo">
            <p className="description__author">By {props.videoDetails[0].channel}</p>
            <p className="description__date">
              {new Date(props.videoDetails[0].timestamp).toLocaleDateString()}
            </p>
          </div>
          <div className="description__viewsLikes">
            <div className="description__views">
              <img src={viewsIcon} alt="" className="description__views-img" />
              <p className="description__views-text">
                {props.videoDetails[0].views}
              </p>
            </div>
            <div className="description__likes">
              <img src={likesIcon} alt="" className="description__likes-img" />
              <p className="description__likes-text">
                {props.videoDetails[0].likes}
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="description__text">{props.videoDetails[0].description}</div>
    </section>
  );
}

export default Description;

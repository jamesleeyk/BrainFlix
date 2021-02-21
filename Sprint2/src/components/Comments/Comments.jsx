import React from 'react';
import './Comments.scss';

import profilePic from '../../assets/Images/Mohan-muruge.jpg';

function Comments(props) {
  return (
    <section className="comments">
      <div className="comments__border">
        <div className="comments__count">
          {
            props.videoDetails.find((video) => video.id === props.currentVideo)
              .comments.length
          }{' '}
          Comments
        </div>
        <div className="comments__interface">
          <form action="" className="comments__form">
            <div className="comments__img-div">
              <img src={profilePic} alt="" className="comments__img" />
            </div>
            <div className="comments__input-div">
              <div className="comments__comment-div">
                <label htmlFor="comment" className="comments__label">
                  JOIN THE CONVERSATION
                </label>
                <textarea
                  name="comment"
                  id="comment"
                  cols="29"
                  rows="5"
                  placeholder="Add a new comment"
                  className="comments__textarea"
                ></textarea>
              </div>
              <div className="comments__button-div">
                <button className="comments__button">COMMENT</button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}

export default Comments;

import React from 'react';
import './UserComments.scss';

import authorPic from '../../assets/Images/Mohan-muruge.jpg';

function UserComments(props) {
  return (
    <section className="userComments">
      <article className="userComments__card">
        <div className="userComments__img-div">
          <img src={authorPic} alt="" className="userComments__img" />
        </div>
        <div className="userComments__text-div">
          <div className="userComments__name-div">
            <h4 className="userComments__author">{props.commentDetails.name}</h4>
            <p className="userComments__date">
              {new Date(props.commentDetails.timestamp).toLocaleDateString()}
            </p>
          </div>
          <div className="userComments__description-div">
            <p className="userComments__description">
              {props.commentDetails.comment}
            </p>
          </div>
        </div>
      </article>
    </section>
  );
}

export default UserComments;

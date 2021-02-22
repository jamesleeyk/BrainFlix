import React from 'react';
import './UploadInterface.scss';
import thumbnail from '../../assets/Images/sava-bobov-eVa2FK83K6w-unsplash.jpg';

function UploadInterface() {
  return (
    <div className="upload__div">
      <h1 className="upload__title">Upload Video</h1>
      <div className="upload__thumbnail-div">
        <p className="upload__thumbnail-caption">VIDEO THUMBNAIL</p>
        <div className="upload__thumbnail-img-div">
          <img src={thumbnail} alt="" className="upload__thumbnail-img" />
        </div>
      </div>
      <form className="upload__form">
        <label htmlFor="title" className="upload__form-titleLabel">
          TITLE YOUR VIDEO
        </label>
        <input
          name="videoTitle"
          id="title"
          type="text"
          className="upload__form-titleInput"
          placeholder="Add a title to your video"
        />
        <label htmlFor="description" className="upload__form-descriptionLabel">
          ADD A VIDEO DESCRIPTION
        </label>
        <textarea
          placeholder="Add a description of your video"
          name="videoDescription"
          id="description"
          cols="30"
          rows="10"
          className="upload__form-descriptionInput"
        ></textarea>
        <button type="submit" className="upload__form-buttonPublish">
          PUBLISH
        </button>
        <button className="upload__form-buttonCancel">CANCEL</button>
      </form>
    </div>
  );
}

export default UploadInterface;

import React, { Component } from 'react';
import { Link, Redirect } from 'react-router-dom';
import './UploadInterface.scss';
import thumbnail from '../../assets/Images/sava-bobov-eVa2FK83K6w-unsplash.jpg';
import axios from 'axios';

class UploadInterface extends Component {
  state = {
    videoTitle: '',
    videoDescription: '',
    formFieldsFilled: false,
    toHome: false,
  };

  handleFormSubmit = (event) => {
    event.preventDefault();
    this.postNewVideo();
  };

  postNewVideo = () => {
    axios
      .post(`http://localhost:5000/upload`, {
        title: this.state.videoTitle,
        description: this.state.videoDescription,
      })
      .then((response) => {
        // console.log('response from posting to api', response)
        this.setState({
          videoTitle: '',
          videoDescription: '',
          toHome: true,
        });
      })
      .catch((err) => console.log(err));
  };

  checkFormFilled = () => {
    const { videoTitle, videoDescription } = this.state;

    if (videoTitle.length >= 2 && videoDescription.length >= 2) {
      this.setState({ formFieldsFilled: true });
    } else {
      this.setState({ formFieldsFilled: false });
    }
  };

  handleVideoTitleInputChange = (event) => {
    this.setState({
      videoTitle: event.target.value,
    });
    this.checkFormFilled();
  };

  handleVideoDescriptionInputChange = (event) => {
    this.setState({
      videoDescription: event.target.value,
    });
    this.checkFormFilled();
  };

  render() {
    if (this.state.toHome === true) {
      return <Redirect to="/" />;
    }
    return (
      <div className="upload__div">
        <h1 className="upload__title">Upload Video</h1>
        <div className="upload__mainDiv">
          <div className="upload__thumbnail-div">
            <p className="upload__thumbnail-caption">VIDEO THUMBNAIL</p>
            <img src={thumbnail} alt="" className="upload__thumbnail-img" />
          </div>
          <form onSubmit={this.handleFormSubmit} className="upload__form">
            <div className="upload__form-input-div">
              <label htmlFor="title" className="upload__form-titleLabel">
                TITLE YOUR VIDEO
              </label>
              <input
                onChange={this.handleVideoTitleInputChange}
                name="videoTitle"
                id="title"
                type="text"
                className="upload__form-titleInput"
                placeholder="Add a title to your video"
                value={this.state.videoTitle}
                autoComplete="off"
              />
              <label htmlFor="description" className="upload__form-descriptionLabel">
                ADD A VIDEO DESCRIPTION
              </label>
              <textarea
                onChange={this.handleVideoDescriptionInputChange}
                placeholder="Add a description of your video"
                name="videoDescription"
                id="description"
                cols="30"
                rows="10"
                className="upload__form-descriptionInput"
                value={this.state.videoDescription}
              ></textarea>
            </div>
            <div className="upload__form-button-div">
              <button
                disabled={this.state.formFieldsFilled ? false : true}
                type="submit"
                className="upload__form-buttonPublish"
              >
                <Link className="upload__form-link" to="{`/`}">
                  PUBLISH
                </Link>
              </button>
              <button className="upload__form-buttonCancel">CANCEL</button>
            </div>
          </form>
        </div>
      </div>
    );
  }
}

export default UploadInterface;

import React, { Component } from 'react';
import Nav from '../components/Nav/Nav';
import UploadInterface from '../components/UploadInterface/UploadInterface';

class Upload extends Component {
  clickHandler = () => {
    alert('Video successfully uploaded!');
  };

  render() {
    return (
      <section className="upload">
        <Nav />
        <UploadInterface clickHandler={this.clickHandler} />
      </section>
    );
  }
}

export default Upload;

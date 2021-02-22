import React, { Component } from 'react';
import Nav from '../components/Nav/Nav';
import UploadInterface from '../components/UploadInterface/UploadInterface';

class Upload extends Component {
  render() {
    return (
      <section className="upload">
        <Nav />
        <UploadInterface />
      </section>
    );
  }
}

export default Upload;

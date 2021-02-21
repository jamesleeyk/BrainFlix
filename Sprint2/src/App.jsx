import React, { Component } from 'react';
import './App.scss';
import Nav from './components/Nav';
import VideoPlayer from './components/VideoPlayer/VideoPlayer';
import Description from './components/Description/Description';
import Comments from './components/Comments/Comments';
import UserComments from './components/UserComments/UserComments';
import VideoList from './components/VideoList/VideoList';

// import video data to use in state object
import videos from './assets/Data/videos.json';
import videoDetails from './assets/Data/video-details.json';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      videos,
      videoDetails,
      currentVideo: videoDetails[0].id,
    };
  }

  clickHandler = (id) => {
    console.log('you clicked on a video!');
    this.setState({
      currentVideo: id,
    });
  };

  render() {
    return (
      <div className="App">
        <header className="head">
          <Nav />
        </header>
        <main className="main">
          <VideoPlayer
            videoDetails={this.state.videoDetails}
            currentVideo={this.state.currentVideo}
          />
          <section className="section">
            <div className="section-div">
              <Description
                videoDetails={this.state.videoDetails}
                currentVideo={this.state.currentVideo}
              />
              <Comments
                videoDetails={this.state.videoDetails}
                currentVideo={this.state.currentVideo}
              />
              <UserComments
                commentDetails={
                  this.state.videoDetails.find(
                    (video) => video.id === this.state.currentVideo
                  ).comments[0]
                }
              />
              <UserComments
                commentDetails={
                  this.state.videoDetails.find(
                    (video) => video.id === this.state.currentVideo
                  ).comments[1]
                }
              />
              <UserComments
                commentDetails={
                  this.state.videoDetails.find(
                    (video) => video.id === this.state.currentVideo
                  ).comments[2]
                }
              />
            </div>
            <VideoList
              videos={this.state.videos}
              currentVideo={this.state.currentVideo}
              clickHandler={this.clickHandler}
            />
          </section>
        </main>
      </div>
    );
  }
}

export default App;

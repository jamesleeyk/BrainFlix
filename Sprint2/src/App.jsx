import React, { Component } from 'react';
import axios from 'axios';
import './App.scss';

// Import components
import Nav from './components/Nav';
import VideoPlayer from './components/VideoPlayer/VideoPlayer';
import Description from './components/Description/Description';
import Comments from './components/Comments/Comments';
import UserComments from './components/UserComments/UserComments';
import VideoList from './components/VideoList/VideoList';

// import video data to use in state object
import videos from './assets/Data/videos.json';
import videoDetails from './assets/Data/video-details.json';

const apiURL = 'https://project-2-api.herokuapp.com';
const apiKey = 'ef14ede8-5246-4f55-87eb-d1afd32f66f1';

class App extends Component {
  state = {
    videos: [],
    currentVideo: {},
  };

  componentDidMount() {
    this.getMainData('1af0jruup5gu');
    this.getVideos();
  }

  getMainData = (id) => {
    axios
      .get(`${apiURL}/videos/${id}?api_key=${apiKey}`)
      .then((response) => {
        this.setState({ currentVideo: response.data.data });
      })
      .catch((err) => {
        console.log(err);
      });
  };

  getVideos = () => {
    axios
      .get(`${apiURL}/videos?api_key=${apiKey}`)
      .then((response) => {
        this.setState({ videos: response.data });
      })
      .catch((err) => {
        console.log(err);
      });
  };

  // clickHandler = (id) => {
  //   this.setState({
  //     currentVideo: id,
  //   });
  // };

  render() {
    return (
      <div className="App">
        <header className="head">
          <Nav />
        </header>
        <main className="main">
          <VideoPlayer currentVideo={this.state.currentVideo} />
          <section className="section">
            <div className="section-div">
              <Description
                videos={this.state.videos}
                currentVideo={this.state.currentVideo}
              />
              <Comments
                videos={this.state.videos}
                currentVideo={this.state.currentVideo}
              />
              {this.state.currentVideo.comments.map((comment) => (
                <UserComments commentDetails={comment} />
              ))}
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

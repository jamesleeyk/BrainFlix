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

class App extends Component {
  state = {
    currentVideo: {},
    videos: [],
  };

  componentDidMount() {
    this.getMainData('1af0jruup5gu');
    this.getVideos();
  }

  componentDidUpdate(prevProps, prevState) {
    const { id } = this.props.match.params;
    if (id !== undefined && prevState.currentVideo.id !== Number(id)) {
      this.getMainData(id);
    }
  }

  getMainData = (id) => {
    axios
      .get(`http://localhost:5000/videos/${id}`)
      .then((response) => {
        this.setState({ currentVideo: response.data });
      })
      .catch((err) => {
        console.log(err);
      });
  };

  getVideos = () => {
    axios
      .get(`http://localhost:5000/videos`)
      .then((response) => {
        this.setState({ videos: response.data });
      })
      .catch((err) => {
        console.log(err);
      });
  };

  render() {
    return (
      <div className="App">
        <header className="head">
          <Nav />
        </header>
        <main className="main">
          {this.state.currentVideo === '' ? (
            ''
          ) : (
            <VideoPlayer currentVideo={this.state.currentVideo} />
          )}
          <section className="section">
            <div className="section-div">
              {Object.keys(this.state.currentVideo).length === 0 ? (
                ''
              ) : (
                <Description currentVideo={this.state.currentVideo} />
              )}
              {Object.keys(this.state.currentVideo).length === 0 ? (
                ''
              ) : (
                <Comments currentVideo={this.state.currentVideo} />
              )}
              {Object.keys(this.state.currentVideo).length === 0
                ? ''
                : this.state.currentVideo.comments.map((comment) => (
                    <UserComments key={comment.id} commentDetails={comment} />
                  ))}
            </div>
            <VideoList
              videos={this.state.videos}
              currentVideo={this.state.currentVideo}
            />
          </section>
        </main>
      </div>
    );
  }
}

export default App;

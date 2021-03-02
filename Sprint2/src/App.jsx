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

const apiURL = 'https://project-2-api.herokuapp.com';
const apiKey = 'ef14ede8-5246-4f55-87eb-d1afd32f66f1';

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
      .get(`${apiURL}/videos/${id}?api_key=${apiKey}`)
      .then((response) => {
        this.setState({ currentVideo: response.data });
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

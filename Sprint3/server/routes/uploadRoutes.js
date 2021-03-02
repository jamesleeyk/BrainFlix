const express = require('express');
const { v4: uuidv4 } = require('uuid');
const router = express.Router();
const fs = require('fs');

// load video json file using the FS module
function loadVideoData() {
  return fs.readFileSync('./data/video-details.json', 'utf8');
}

// post upload video route
router.post('/', (req, res) => {
  console.log('req body', req.body);
  if (req.body.title === '' && req.body.description === '') {
    res.status(422).send('please enter a title and description');
  } else {
    const videos = JSON.parse(loadVideoData());
    const newVideo = {
      id: uuidv4(),
      title: req.body.title,
      description: req.body.description,
      channel: 'Horse King',
      image: 'http://localhost:5000/Images/sava-bobov-eVa2FK83K6w-unsplash.jpg',
      comments: [
        {
          name: 'James Lee',
          comment: 'This video is so good',
          id: '1ab6d9f6-da38-456e-9b09-ab0acd9ce818',
          likes: 0,
          timestamp: 1545162149000,
        },
        {
          name: 'Jackie Chan',
          comment: 'INSANE VIDEO',
          id: 'cc6f173d-9e9d-4501-918d-bc11f15a8e14',
          likes: 0,
          timestamp: 1544595784046,
        },
        {
          name: 'Donnie Yen',
          comment: 'Wowza!',
          id: '993f950f-df99-48e7-bd1e-d95003cc98f1',
          likes: 0,
          timestamp: 1542262984046,
        },
      ],
    };
    videos.push(newVideo);
    fs.writeFileSync('./data/video-details.json', JSON.stringify(videos));

    // return response
    res.json({
      message: 'posted to upload endpoint',
      videoPosted: newVideo,
    });
  }
});

module.exports = router;

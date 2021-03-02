const express = require('express');
const router = express.Router();
const fs = require('fs');

// import videoImage from '../public/Images/sava-bobov-eVa2FK83K6w-unsplash.jpg';

// load video json file using the FS module
function loadVideoData() {
  return fs.readFileSync('./data/video-details.json', 'utf8');
}

// get videos route
router.get('/', (req, res) => {
  const videos = JSON.parse(loadVideoData());
  const videosMapped = videos.map((video) => {
    return {
      id: video.id,
      title: video.title,
      image: video.image,
      channel: video.channel,
    };
  });
  res.json(videosMapped);
});

// get single product
router.get('/:id', (req, res) => {
  const videos = JSON.parse(loadVideoData());
  const foundVideoIndex = videos.findIndex((video) => {
    return video.id === req.params.id;
  });
  res.json(videos[foundVideoIndex]);
});

// router.post('/', (req, res) => {
//   console.log('req body', req.body);
//   if (req.body.title === '' && req.body.description === '') {
//     res.status(422).send('please enter a title and description');
//   } else {
//     const videos = JSON.parse(loadVideoData());
//     const newVideo = {
//       id: uuidv4(),
//       title: req.body.title,
//       description: req.body.description,
//       // image: videoImage,
//       comments: [],
//     };
//     videos.push(newVideo);
//     fs.writeFileSync('./data/video-details.json', JSON.stringify(videos));

//     // return response
//     res.json({
//       message: 'posted to upload endpoint',
//       videoPosted: newVideo,
//     });
//   }
// });

module.exports = router;

const express = require('express');
const cors = require('cors');
const app = express();

// load routing file
const videoRoutes = require('./routes/videoRoutes');
const uploadRoutes = require('./routes/uploadRoutes');
const PORT = 5000;

// middleware
app.use(cors());
app.use(express.static('public'));
app.use(express.json());

app.use('/videos', videoRoutes);
app.use('/upload', uploadRoutes);

app.get('/', (req, res) => {
  res.json({
    greeting: 'Welcome to my API!',
  });
});

// start application and listen on PORT
app.listen(PORT, console.log(`listening at: http://localhost:${PORT}`));

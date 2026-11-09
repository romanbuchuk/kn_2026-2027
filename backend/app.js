const express = require('express');
const path = require('node:path');
const app = express();
const json = require('body-parser/json');

const jsonParser = json();

const cors = require('cors');

app.use(cors());
app.use(express.static(path.join(__dirname, '..', 'dist')));

const dummyServerUrl = 'https://dummyjson.com';

// (request, response, next) {}
app.get('/api/posts', async (req, res) => {
  try {
    const response = await fetch(`${dummyServerUrl}/posts`);
    const data = await response.json();

    res.send(data.posts);
  } catch (error) {
    console.error(error);
    res.status(500).send('Error fetching posts');
  }
});

app.post('/api/posts/add', jsonParser, async (req, res) => {
  console.log(req.body);
  try {
    const response = await fetch(`${dummyServerUrl}/posts/add`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(req.body),
    });
    const data = await response.json();

    res.send(data);
  } catch (error) {
    console.error(error);
    res.status(500).send('Error adding post');
  }
});

app.get(/.*/, (req, res) => {
  const indexFile = path.join(__dirname, '..', 'dist', 'index.html');
  res.sendFile(indexFile);
});

module.exports = app;

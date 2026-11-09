const express = require('express');
const path = require('node:path');
const app = express();

const cors = require('cors');

app.use(cors());
app.use(express.static(path.join(__dirname, '..', 'dist')));

const dummyServerUrl = 'https://dummyjson.com';

// (request, response, next) {}
app.get('/api/users', (req, res) => {
  fetch(`${dummyServerUrl}/users`)
    .then((response) => response.json())
    .then((data) => res.send(data.users))
    .catch((error) => {
      console.error(error);
      res.status(500).send('Error fetching users');
    });
});

app.post('/api/users', (req, res) => {
  res.send('Hello Post Request Users!');
});

app.get(/.*/, (req, res) => {
  const indexFile = path.join(__dirname, '..', 'dist', 'index.html');
  res.sendFile(indexFile);
});

module.exports = app;

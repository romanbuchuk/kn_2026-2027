const express = require('express');
const app = express();
const users = require('./constants/users');
const cors = require('cors');

app.use(cors());
app.use('/users', (req, res, next) => {
  console.log('==== OUR CUSTOM MIDDLEWARE ======');
  req.customName = 'CUSTOM NAME';

  next();
});

// (request, response, next) {}

app.get('/', (req, res) => {
  res.send('Hello World!');
});
app.get('/users', (req, res) => {
  console.log(req.customName);
  res.send(users);
});

app.post('/users', (req, res) => {
  res.send('Hello Post Request Users!');
});

module.exports = app;

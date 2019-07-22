const express = require('express');

const app = express();
const http = require('http').createServer(app);
const cookie = require('cookie-parser');
const { join } = require('path');

const router = require('./routes');


app.use(express.json());

app.use(cookie());

app.use('/api/v1', router);

app.use(express.static(join(__dirname, '..', 'client', 'build')));

app.get('*', (_req, res) => {
  res.sendFile(join(__dirname, '..', 'client', 'build', 'index.html'));
});

module.exports = http;

const express = require('express');
const server = express();

server.get('/', (req, res) => {
  res.status(200);
});

module.exports = server;

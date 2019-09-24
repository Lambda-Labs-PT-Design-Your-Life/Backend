const express = require('express');
const cors = require('cors');
const helmet = require('helmet');
const server = express();
const authRouter = require('../auth/auth-router');

//thirdparty middleware
server.use(helmet());
server.use(cors());
server.use(express.json());

//endpoint routes
server.use('/api/auth', authRouter);

server.get('/', (req, res) => {
  res.status(200);
});

module.exports = server;

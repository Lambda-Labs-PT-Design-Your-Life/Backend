const express = require('express');
const cors = require('cors');
const helmet = require('helmet');
const server = express();
const authRouter = require('./auth/auth-router');
const activityRouter = require('./activities/activites-router');
//custom middleware
const authenticate = require('../middleware/authenticate');

//thirdparty middleware
server.use(helmet());
server.use(cors());
server.use(express.json());

//endpoint routes
server.use('/api/auth', authRouter);
server.use('/api/activity', authenticate, activityRouter);

server.get('/', (req, res) => {
  res.status(200).json({ API: 'UP' });
});

module.exports = server;

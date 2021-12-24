const express = require('express');
const helmet = require('helmet');
const cors = require('cors');

const restrict = require('./utils/middleware/restrict');

const authRouter = require('./auth/router');
const potlucksRouter = require('./potluck/router');

const server = express();

server.use(helmet());
server.use(express.json());
server.use(cors());

server.use('/api/auth', authRouter);
server.use('/api/potlucks', restrict, potlucksRouter);

server.use('*', (req, res) => {
  res.json({ api: 'up' });
});

// eslint-disable-next-line no-unused-vars
server.use((err, req, res, next) => {
  res.status(err.status || 500).json({
    message: err.message,
  });
});

module.exports = server;

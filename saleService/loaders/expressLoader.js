const config = require('../config');
const routes = require('../routes');
const express = require('express');
const bodyParser = require('body-parser');

module.exports = async (app) => {
  // eslint-disable-next-line prettier/prettier
  app.use(function (req, res, next) {
    res.header('Access-Control-Allow-Origin', '*');
    res.header(
      'Access-Control-Allow-methods',
      'GET,HEAD,PUT,PATCH,POST,DELETE, OPTIONS'
    );
    res.header(
      'Access-Control-Allow-Headers',
      'Origin, X-Requested-With, Content-Type, Content-Length, X-Auth-Token, Accept, Authorization'
    );
    next();
  });

  app.use('/public', express.static('public'));
  app.enable('trust proxy');
  app.use(bodyParser.json());
  app.use(config.api.prefix, routes());
  app.use(express.urlencoded({ extended: true }));

  app.use((req, res, next) => {
    const err = new Error('Not Found');
    next(err);
  });

  app.use((err, req, res, next) => {
    if (err.name === 'UnauthorizedError') {
      return res.status(err.status).send({ message: err.message }).end();
    }
    return next(err);
  });

  app.use((err, req, res, next) => {
    res.status(err.status || 500);
    res.json({
      errors: {
        message: err.message,
      },
    });
  });
};

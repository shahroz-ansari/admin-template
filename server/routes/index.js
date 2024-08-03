var express = require('express');
var config = require('./config');
var router = express.Router();

Object.entries(config).forEach(([path, { method, json, status, delay }]) => {
  router[method || 'get'](path, function (req, res, next) {
    setTimeout(() => {
      res.status(status || 200).json(json);
    }, delay || 20); // milliseconds
  });
});

module.exports = router;

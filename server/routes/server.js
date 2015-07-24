var express = require('express');
var router = express.Router();

router.get('/', function (req, res, next) {
  'use strict';

  res.send('server');
});

module.exports = router;

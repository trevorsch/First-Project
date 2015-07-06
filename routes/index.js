var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  var conUrl = 'http://www.beaverranch.org/disc-golf/';
  res.render('index', { title: 'Denver Disc Golf Courses', conUrl: conUrl });
});

module.exports = router;

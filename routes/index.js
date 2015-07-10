var express = require('express');
var router = express.Router();
var db = require('monk')('localhost/dg-markers');
var markerCollection = db.get('markers');
/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Denver Disc Golf Courses'});
});

router.get('/boulder', function(req, res, next) {
  res.render('boulder', {title: 'Boulder Disc Golf Courses'});
});

module.exports = router;

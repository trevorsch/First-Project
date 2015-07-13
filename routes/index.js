var express = require('express');
var router = express.Router();
var db = require('monk')('localhost/markers');
var markerCollection = db.get('markers');
/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Denver Disc Golf Courses'});
  // console.log(markerCollection);
});

router.get('/boulder', function(req, res, next) {
  res.render('boulder', {title: 'Boulder Disc Golf Courses'});
});

// router.get('/', function(req, res, next){
//
// });

module.exports = router;

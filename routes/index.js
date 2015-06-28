var express = require('express');
var router = express.Router();
var unirest = require('unirest');
var mapsKey = process.env.MAPS_API;
/* GET home page. */
router.get('/', function(req, res, next) {
  // unirest.get('https://www.google.com/maps/embed/v1/search?key=');
  res.render('index', { title: 'Disc Golf Courses in the Denver Metro Area' });
});

module.exports = router;

var express = require('express');
var router = express.Router();
var unirest = require('unirest');
var mapsKey = process.env.MAPS_URL;
/* GET home page. */
router.get('/', function(req, res, next) {
  var url="https://www.google.com/maps/embed/v1/search?key=AIzaSyCaGK6UNCGfCcwnW8R5zSLmQQyqytXYMWE&q=Denver";
  res.render('index', { src: url, title: 'Denver Disc Golf' });
});

module.exports = router;

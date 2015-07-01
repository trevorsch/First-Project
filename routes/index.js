var express = require('express');
var router = express.Router();
var unirest = require('unirest');
var mapsKey = process.env.MAPS_URL;
/* GET home page. */
router.get('/', function(req, res, next) {
  var url="https://www.google.com/maps/embed/v1/search?key=AIzaSyCaGK6UNCGfCcwnW8R5zSLmQQyqytXYMWE&q=Denver";
  res.render('index', { src: url, title: 'Disc Golf Courses in the Denver Metro Area' });
});

function initialize(){
    var markerPositionTest = new google.maps.LatLng(39.856339, -104.672876);
    var mapOptions = {
      center: markerPositionTest
    };
    var map = new google.maps.Map(document.getElementById('map_frame'), mapOptions);
    var marker = new google.maps.Marker({
        position: markerPositionTest,
        title:"Test"
    });
marker.setMap(map);
}

module.exports = router;

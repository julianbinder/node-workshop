var request = require('request');
var prompt = require("prompt");

var issDataURL = 'http://api.open-notify.org/iss-now.json';
var lat2;
var lon2;
var issPosition;
var lat1;
var lon1;
var R = 6371e3; 
var φ1 ;
var φ2 ;
var Δφ ;
var Δλ ;
Number.prototype.toRadians = function() {
    return this * Math.PI / 180;
  };
function latAndLong() {
    

  
    request(issDataURL, function(err, response) {
        if (err) {
            console.log('There was an error');
        }
        else {

            var parsed = JSON.parse(response.body);

             issPosition = parsed.iss_position;
             lat1 = issPosition.latitude;
             lon1 = issPosition.longitude;
             
        };
    });
    
    prompt.get('city', function(err, res) {
        var city = res.city;
        var url = ' https://maps.googleapis.com/maps/api/geocode/json?address=' + city;
        request(url, function(err, response, body) {
            
            if (err) {
            console.log('There was an error');
        }
        else {
            var parsedBody = JSON.parse(response.body);
            
            var googLocationLat = parsedBody.results[0].geometry.location.lat;
            var googLocationLon = parsedBody.results[0].geometry.location.lng;
            lat2 = googLocationLat;
            lon2 = googLocationLon;
            getDistance(lat1, lon1, lat2, lon2);

        }


        })
    });
 
 function getDistance(lat1, lon1, lat2, lon2){
 
var φ1 = lat1.toRadians();
var φ2 = lat2.toRadians();
var Δφ = (lat2 - lat1).toRadians();
var Δλ = (lon2 - lon1).toRadians();
    var a = Math.sin(Δφ / 2) * Math.sin(Δφ / 2) +
        Math.cos(φ1) * Math.cos(φ2) *
        Math.sin(Δλ / 2) * Math.sin(Δλ / 2);
    var c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));

    var d = R * c;

    console.log("You are "+ d + " from the ISS!")
 }
 
}

latAndLong()


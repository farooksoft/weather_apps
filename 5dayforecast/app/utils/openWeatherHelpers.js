var axios = require('axios');

var public_key = "c58172ee6b3cb9558c6ac7060b0bf36c";

function getCurrentWeather (city) {
  var url = "http://api.openweathermap.org/data/2.5/weather?q=" + city + "&type=accurate&APPID=";
  return axios.get(url + public_key);
  // return ({{"coord":{"lon":28.04,"lat":-26.2},"weather":[{"id":800,"main":"Clear","description":"clear sky","icon":"01d"}],"base":"cmc stations","main":{"temp":292.41,"pressure":1026,"humidity":53,"temp_min":288.15,"temp_max":297.15},"wind":{"speed":3.1,"deg":340},"clouds":{"all":0},"dt":1458896400,"sys":{"type":3,"id":6569,"message":0.0075,"country":"ZA","sunrise":1458879246,"sunset":1458922355},"id":993800,"name":"Johannesburg","cod":200}})
}

function getFiveDayForecast (city) {
  var url = "http://api.openweathermap.org/data/2.5/forecast/daily?q=" + city + "&type=accurate&APPID=";
  return axios.get(url + public_key + "&cnt=5");
}

var helpers = {
  getCurrentWeather: function(city){
    return getCurrentWeather(city);
  },
  getFiveDayForecast: function(city){
    return getFiveDayForecast(city);
  }
}

module.exports = helpers;

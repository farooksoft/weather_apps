var axios = require('axios');

var appkey = 'abc1f5c5c52cf9c660d202899b9a783e';

const OPEN_WEATHER_MAP_URL = 'http://api.openweathermap.org/data/2.5/weather?appid=abc1f5c5c52cf9c660d202899b9a783e&units=metric';

module.exports = {
  getTemp: function(location){

    var requestURL = `${OPEN_WEATHER_MAP_URL}&q=${encodeURIComponent(location)}`;

    return axios.get(requestURL).then(function(res){

      if(res.data.cod && res.data.message){
        throw new Error(res.data.message);
      }else{
        return res.data.main.temp;
      }
    },function(res){
      throw new Error('Unable to get weather for this location'); //Static Message due to an update in the API
    });

  }
};

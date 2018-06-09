var Axios = require('axios');

const OPEN_WEATHER_API_KEY = '64404196943d9d2c975292120026d018';
const OPEN_WEATHER_MAP_URL = 'http://api.openweathermap.org/data/2.5/weather?appid=' + OPEN_WEATHER_API_KEY + '&units=metric';

module.exports = {
    getTemp: function (location) {
        var encoded_location = encodeURIComponent(location);
        var request_url = `${OPEN_WEATHER_MAP_URL}&q=${encoded_location}`;
        return Axios.get(request_url).then(function (res) {
            if (res.data.cod && res.data.message) {
                throw new Error(res.data.message);
            } else {
                return {
                    temp: res.data.main.temp,
                    city: res.data.name
                };
            }
        }, function (res) {
            throw new Error(res.data.message);
        })
    }
};
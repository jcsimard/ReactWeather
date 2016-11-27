var axios = require('axios');

const OPEN_WEATHER_MAP_URL = 'http://api.openweathermap.org/data/2.5/weather?appid=6e5c1c6c4afa1c432eae0d984b126c10&units=metric';

module.exports = {
  getTemp: function (location) {
    var encodeLocation = encodeURIComponent(location);
    var requestURL = `${OPEN_WEATHER_MAP_URL}&q=${encodeLocation}`;

    return axios.get(requestURL).then(function (res) {
      if (res.data.cod && res.data.message) {
        throw new Error(res.data.message);
      } else {
        return res.data.main.temp;
      }
    }, function (err) {
      throw new Error('Unable to fetch weather for that location.');
    });
  }
};

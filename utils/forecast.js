const request = require("request");

const forecast = (latitude, longitude, callback) => {
  url =
    "http://api.weatherstack.com/current?access_key=3d1cba0595dfe15d1a0afc0fcc67fce2&query=" +
    latitude +
    "," +
    longitude;

  request({ url: url, json: true }, (error, res) => {
    if (error) {
      // console.log('Unable to fetch weather details')
      callback(error, undefined);
    } else if (res.body.error) {
      // console.log('Unable to get weather details')
      callback("Unable to get weather details", undefined);
    } else {
      // console.log(res.body.location.name)
      callback(undefined, {
        location:
          res.body.location.name +
          " " +
          res.body.location.region +
          " " +
          res.body.location.country,
        temperature: res.body.current.temperature,
        feelslikeTemp: res.body.current.feelslike,
      });
    }
  });
};

module.exports = forecast;

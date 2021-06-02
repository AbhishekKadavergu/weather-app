const geocode = require("./utils/geocode");
const forecast = require("./utils/forecast");

geocode("Goa", (error, data) => {
  if (error) {
    console.log(error);
  } else {
    console.log(data);
    forecast(data.latitude, data.longitude, (error, data) => {
      if (error) {
        console.log(error);
      } else {
        console.log(data);
      }
    });
  }
});

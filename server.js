const express = require("express");
const cors = require("cors");

const geocode = require("./utils/geocode");
const forecast = require("./utils/forecast");

const app = express();
app.use(cors());

const port = 8000;

app.get("/weather", function (req, resp) {
  console.log(req.query.address);
  if (!req.query.address) {
    return resp.send({
      error: "You must  provide an Address",
    });
  }

  geocode(req.query.address, (error, data) => {
    if (error) {
      //   console.log(error);
      return resp.send({
        error: error,
      });
    } else {
      console.log(data);
      forecast(data.latitude, data.longitude, (error, data) => {
        if (error) {
          //   console.log(error);
          return resp.send({
            error: error,
          });
        } else {
          //   console.log(data);
          return resp.send({
            weather: data,
          });
        }
      });
    }
  });

  //   resp.send({
  //     location: "Hyderabad",
  //   });
});

app.listen(port, () => {
  console.log(`App is running on port : ${port}`);
});

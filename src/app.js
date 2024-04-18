const express = require('express');
const morgan = require('morgan');
const helmet = require('helmet');
const cors = require('cors');
const path = require('path');

require('dotenv').config();

const middlewares = require('./middlewares');
const api = require('./api');

const app = express();

app.use(morgan('dev'));
app.use(helmet());
app.use(cors());
app.use(express.json());

const documentation = {
  "message": "Team Sammard's Testing API",
  "description": "Welcome to the documentation to Team Sammard's testing API. This API provides access to various resources and functionalities necessary to simulate and test codes and softwares.",
  "endpoints": [
    {
      "url": "/datapacket/temperature",
      "method": "GET",
      "description": "This endpoint retrieves temperature data, along with the timestamp.",
      "response": {
        "timestamp": "The timestamp indicating when the temperature data was retrieved, in seconds.",
        "temperature": "The temperature value in Celsius of the payload onboard the rocket."
      }
    },
    {
      "url": "/datapacket/humidity",
      "method": "GET",
      "description": "This endpoint retrieves humidity data.",
      "response": {
        "timestamp": "The timestamp indicating when the humidity data was retrieved, in seconds.",
        "humidity": "The humidity value as a percentage."
      }
    },
    {
      "url": "/datapacket/pressure",
      "method": "GET",
      "description": "This endpoint retrieves pressure data.",
      "response": {
        "timestamp": "The timestamp indicating when the pressure data was retrieved, in seconds.",
        "pressure": "The pressure value in hectopascals (hPa)."
      }
    }
  ],
  "example_usage": {
    "retrieve_temperature_data": {
      "description": "Retrieve Temperature Data",
      "url": "https://team-sammard/datapacket/temperature",
      "method": "GET",
      "response": {
        "timestamp": "1648834567",
        "temperature": "25.3"
      }
    }
  }
};

app.get('/', (req, res) => {
  res.json(documentation);
});

app.use('/datapacket', api);

app.use(middlewares.notFound);
app.use(middlewares.errorHandler);

module.exports = app;

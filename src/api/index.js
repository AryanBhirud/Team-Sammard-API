const express = require('express');

const emojis = require('./emojis');
const temperature = require('./temperature');
const humidity = require('./humidity');
const pressure = require('./pressure');
const nav = require('./nav');
const router = express.Router();

function getHumidity() {
  var date = new Date();
  var s = date.getSeconds() * 1000;
  var m = date.getMilliseconds();
  const currentTime = s + m;
  const humidity = (Math.random() * (38 - 35 + 1) + 20).toFixed(2);

  return { timestamp: currentTime, humidity: humidity };
}

function getPressure() {
  const x = 30;
  const z = 60;
  var date = new Date();
  var s = date.getSeconds() * 1000;
  var m = date.getMilliseconds();
  const currentTime = s + m;
  const elapsedTime = currentTime % z;
  let pressure;

  if (elapsedTime < x) {
      pressure = (Math.random() * (38 - 35 + 1) + 15).toFixed(2);
  } else {
      pressure = (Math.random() * (45 - 10 + 1) + 10).toFixed(2);
  }

  return { timestamp: currentTime, pressure: pressure };
}

function getTemp() {
  const x = 10;
  const y = 15;
  const z = 60;
  var date = new Date();
  var s = date.getSeconds() * 1000;
  var m = date.getMilliseconds();
  const currentTime = s + m;
  const elapsedTime = currentTime % z;
  let temperature;

  if (elapsedTime < x) {
      temperature = (Math.random() * (38 - 35 + 1) + 20).toFixed(2);
  } else if (elapsedTime < x + y) {
      temperature = (Math.random() * (35 - 10 + 1) + 10).toFixed(2);
  } else {
      temperature = (Math.random() * (45 - 10 + 1) + 10).toFixed(2);
  }

  return { timestamp: currentTime, temperature: temperature };
}


router.get("/", (req, res) => {
  const { timestamp, temperature } = getTemp();  
  const { pressure } = getPressure();
  const { humidity } = getHumidity();
  const responseData = { timestamp, temperature, pressure, humidity };
  res.json(responseData);
});

// router.use('/emojis', emojis);
router.use('/temperature', temperature);
router.use('/humidity', humidity);
router.use('/pressure', pressure);
router.use('/nav', nav);

module.exports = router;

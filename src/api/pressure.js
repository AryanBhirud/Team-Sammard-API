const express = require("express");
const getHumidity = require("./humidity");

const router = express.Router();

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

router.get("/", (req, res) => {
    const { timestamp, pressure } = getPressure();  
    const responseData = { timestamp, pressure };
    res.json(responseData);
});

module.exports =router;
const express = require("express");

const router = express.Router();

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
    const responseData = { timestamp, temperature };
    res.json(responseData);
});

module.exports =router;

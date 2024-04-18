const express = require("express");

const router = express.Router();

function getHumidity() {
    var date = new Date();
    var s = date.getSeconds() * 1000;
    var m = date.getMilliseconds();
    const currentTime = s + m;
    const humidity = (Math.random() * (38 - 35 + 1) + 20).toFixed(2);

    return { timestamp: currentTime, humidity: humidity };
}

router.get("/", (req, res) => {
    const { timestamp, humidity } = getHumidity();
    const responseData = { timestamp, humidity };
    res.json(responseData);
});

module.exports =router;

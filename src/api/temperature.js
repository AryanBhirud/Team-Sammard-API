const express = require('express');

const router = express.Router();

function getTemp() {
    const x = 10;
    const y = 15;
    const z = 60; 
    
    const currentTime = (new Date().getTime() / 1000);
    const elapsedTime = currentTime % z;
    
    if (elapsedTime < x) {
        return ((Math.random() * (45 - 20 + 1)) + 20).toFixed(2);
    } else if (elapsedTime < x + y) {
        return ((Math.random() * (35 - 10 + 1)) + 10).toFixed(2);
    } else {
        return ((Math.random() * (45 - 10 + 1)) + 10).toFixed(2);
    }
}

router.get('/', (req, res) => {
    const temperature = getTemp();
    const responseData = { temperature };
    res.json(responseData);
});

module.exports = router;

const express = require('express');

const emojis = require('./emojis');
const temperature = require('./temperature');
const humidity = require('./humidity');
const pressure = require('./pressure');

const router = express.Router();

router.get('/', (req, res) => {
  res.json({
    message: 'API - 👋🌎🌍🌏',
  });
});

// router.use('/emojis', emojis);
router.use('/temperature', temperature);
router.use('/humidity', humidity);
router.use('/pressure', pressure);

module.exports = router;

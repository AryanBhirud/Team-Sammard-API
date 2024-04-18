const express = require('express');

const emojis = require('./emojis');
const temperature = require('./temperature');

const router = express.Router();

router.get('/', (req, res) => {
  res.json({
    message: 'API - 👋🌎🌍🌏',
  });
});

// router.use('/emojis', emojis);
router.use('/temperature', temperature);

module.exports = router;

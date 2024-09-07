const express = require("express");
const path = require('path');

const router = express.Router();

// Serve nav.html on the root of /nav route
router.get("/", (req, res) => {
    res.sendFile(path.join(__dirname, 'views', 'nav.html')); // Assuming nav.html is in the views folder
});

module.exports = router;

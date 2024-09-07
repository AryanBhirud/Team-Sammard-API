const express = require("express");

const router = express.Router();

router.get("/", (req, res) => {
    res.sendFile(path.join('nav.html'));
});

module.exports =router;

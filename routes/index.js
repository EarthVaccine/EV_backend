const express = require("express");
const router = express.Router();
const path = require("path");

router
.get('/', (req, res) => {
    res.render('index');
})
.post('/set_cookie', (req, res) => {
    res.status(200).json({ msg: 'success' });
})

module.exports = router;
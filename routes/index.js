const express = require('express')
const router = express.Router()
const Url = require('../models/url')
const newShorten = require('../utility/newShorten')

router.get('/', (req, res) => {
  res.render('index')
});

module.exports = router;
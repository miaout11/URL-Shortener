const express = require('express')
const router = express.Router()
const ShorterUrl = require('../../models/shorterUrl')

router.get('/', (req, res) => {
  res.render('index')
})

module.exports = router
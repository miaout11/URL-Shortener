const express = require('express')
const router = express.Router()
const Url = require('../models/url')
const newShorten = require('../utility/newShorten')

router.get('/', (req, res) => {
  res.render('index')
});

// use new short URL redirect
router.get('/:shorten', (req, res) => {
  const shortenName = req.params.shorten
  Url.findOne({ shorten: shortenName })
    .lean()
    .then((relink) => {
      if (relink) {
        console.log(relink)
        res.status(301).redirect(relink.originUrl)
      }
    })
    .catch((error) => console.log(error))
});


module.exports = router;
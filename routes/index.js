const express = require('express')
const router = express.Router()
const Url = require('../models/url')
const newShorten = require('../utility/newShorten')

const mainUrl = 'http://localhost:3000/'
let newShortUrl = ''

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
        res.status(301).redirect(relink.originUrl)
      }
    })
    .catch((error) => console.log(error))
});

// get the short url
router.post('/', (req, res) => {
  const inputUrl = req.body.inputUrl
  Url.find()
    .lean()
    .then((urlList) => {
      newShortUrl = urlList.find((eachUrl) => eachUrl.originUrl === inputUrl)
      if (newShortUrl) {
        newShortUrl = mainUrl + newShortUrl.shorten
        return res.render('new', { newShortUrl, inputUrl })
      } else {
        let shorten = newShorten()
        newShortUrl = mainUrl + shorten;

        while (urlList.some((eachUrl) => eachUrl.shorten === shorten)) {
          shorten = newShorten()
        }
        Url.create({
          originUrl: inputUrl,
          shorten: shorten,
        })
        return res.render('new', { newShortUrl, inputUrl })
      }
    })
    .catch((error) => console.log(error))
});

module.exports = router;
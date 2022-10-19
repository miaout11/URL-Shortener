const express = require('express')
const router = express.Router()
const Url = require('../../models/url')

router.get('/', (req, res) => {
  res.render('index')
})

// router.post('/', (req, res) => {
//   const { longUrl } = req.body
//   if (validUrl.isUri(longUrl)) {

//   }
// })

module.exports = router
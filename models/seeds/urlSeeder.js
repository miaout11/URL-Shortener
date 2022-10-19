const db = require('../../config/mongoose')
const Url = require('../url')
const dummyUrl = require('./url.json').results

db.once('open', () => {
  console.log('urlSeeder connected!')
  Url.create(dummyUrl)
    .then(() => {
      console.log('done.')
      db.close()
    })
    .catch(error => console.log(error))
})
const mongoose = require('mongoose')
const Schema = mongoose.Schema
const shorterUrlSchema = new Schema({
  name: {
    type: String,
    required: true
  }
})

module.exports = mongoose.model('ShorterUrl', shorterUrlSchema)
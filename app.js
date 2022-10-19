const express = require('express')
const mongoose = require('mongoose')

mongoose.connect(process.env.MONGODB_SHORT_URI, { useNewUrlParser: true, useUnifiedTopology: true })

const db = mongoose.connection
db.on('error', () => {
  console.log('mongodb error!')
})
db.once('open', () => {
  console.log('mongodb connected!')
})


const app = express()
const port = 3000

app.get('/', (req, res) => {
  res.send('hello world')
})

app.listen(port, () => {
  console.log(`App is running on http://localhost:${port}`)
})
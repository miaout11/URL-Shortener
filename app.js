// 載入套件
const express = require('express')
const exphbs = require('express-handlebars')
const routes = require('./routes') // **全域變數宣告要放在檔案最上方**

const app = express()
const port = 3000

// setting 樣板引擎
app.engine('handlebars', exphbs({ defaultLayout: 'main' }))
app.set('view engine', 'handlebars')
// setting express內建的body-parser
app.use(express.urlencoded({ extended: true }))
// 載入靜態檔案
app.use(express.static('public'))

require('./config/mongoose')
// 將request導入路由器
app.use(routes)

// 設定app監聽的port
app.listen(port, () => {
  console.log(`App is running on http://localhost:${port}`)
})
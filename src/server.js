const express = require('express')
const nunjucks = require('nunjucks')
const routes = require('./routes')
const methodOveride = require('method-override')

const server = express()

server.use(express.urlencoded({extended: true}))
server.use(express.static('public'))
server.use(methodOveride('_method'))
server.use(routes)

server.set("view engine","html")

nunjucks.configure(['./src/app/views/MainPage', './src/app/views/AdminPage'],{
  express: server,
  autoescape: false,
  noCache: true
})



server.listen(5000, function(){
  console.log("Server is Running")
})

"use strict"
var express = require('express')
  , ejsLocals = require('ejs-locals')
  , app = express()
  , pages = require(__dirname + '/controllers/pages')
  , bodyParser = require('body-parser')
  , gps = require(__dirname + '/controllers/gps')
  , bodyParser = require('body-parser')
  , jsonParser = bodyParser.json()




// configuration settings
app.engine('ejs', ejsLocals)
app.set('views', __dirname + '/views')
app.set('view engine', 'ejs')
app.use(bodyParser.json())
//app.use(express.static(__dirname + '/public'))

//set view locals
app.use(function (req, res, next) {
  app.locals.route = req.url
  next()
})



//  mount routes
app.get('/', function (req, res) { res.redirect('/home') })
app.get('/home', pages.home)
app.get('/about', pages.about)

//POST request processing
app.post('/gps', jsonParser, gps.processing)

app.use(express.static(__dirname + '/public'))


module.exports = app


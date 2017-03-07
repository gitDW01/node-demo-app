"use strict"

var mysql = require('mysql')
  , connection = mysql.createConnection({ host : 'localhost', user : 'navigator', password : 'Q16061995', database : 'gps' });



var processing = function(req, res){
  if (!req.body) return res.sendStatus(400)
  var str = req.body
  var query = connection.query('INSERT INTO telemetry SET ?', str, function(err, result) {
    if (err) throw err
  console.log(err)
 console.log(result)
})

  console.log(query.sql)
  res.send('welcome' + str.name)
}

exports.processing = processing

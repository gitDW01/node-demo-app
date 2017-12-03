"use strict"

var processing = function(req, res){
  if (!req.body) return res.sendStatus(400)
  var str = req.body

  console.log(query.sql)
  res.send('welcome' + str)
}


exports.processing = processing

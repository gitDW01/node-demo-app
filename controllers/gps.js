"use strict"

var processing = function(req, res){
  if (!req.body) return res.sendStatus(400)
  var str = req.body

  
  res.send('welcome' + str.Time)
}


exports.processing = processing

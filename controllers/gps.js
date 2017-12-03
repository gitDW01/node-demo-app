"use strict"

var processing = function(req, res){
  if (!req.body) return res.sendStatus(400)
  var str = req.body

  global.outlol = str.arduino
  
  res.send('welcome' + ' ' + str.arduino)
}


exports.processing = processing

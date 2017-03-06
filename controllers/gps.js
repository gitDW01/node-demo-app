var processing = function(req, res){
  if (!req.body) return res.sendStatus(400)

  res.send('welcome')
  console.log(req.body)

}

exports.processing = processing

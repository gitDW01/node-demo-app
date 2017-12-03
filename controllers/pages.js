var home = function (req, res) {
  res.render('pages/home', {
    title: 'Home page'
  , message: "Number of cycles + global.outlol"
})
}

var about = function (req, res) {
  res.render('pages/about', {
    title: 'About'
  , message: 'This is the demo project of Yaraslau Klimkou and Nickolay Rudenko'
})
}

exports.home = home
exports.about = about

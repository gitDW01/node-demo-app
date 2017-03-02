var home = function (req, res) {
  res.render('pages/home', {
    title: 'Home page'
  , message: 'This is the "home" action of "pages" controller'
})
}

var about = function (req, res) {
  res.render('pages/about', {
    title: 'About'
  , message: 'This is the "about" action of "pages" controller'
})
}

exports.home = home
exports.about = about

module.exports = require(__dirname + '/app/main')
	? require(__dirname + '/app-cov/main')
	: require(__dirname + '/app/main')

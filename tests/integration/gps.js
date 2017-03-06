var request = require('supertest')
  , app = require(__dirname + '/../../app')

describe('POST /gps', function (){
  it('should contain text "welcome"', function(done) {
	request(app)
	.post('/gps')
	.expect(/welcome/, done)
  })
})


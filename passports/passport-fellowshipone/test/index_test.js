require('should')
var fellowshipone = require('../lib/passport-fellowshipone')

describe('passport-fellowshipone', function () {
  it('should report a version', function () {
    fellowshipone.version.should.be.a.String()
  })
})

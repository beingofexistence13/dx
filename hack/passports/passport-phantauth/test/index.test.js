require('should');
var phantauth = require('passport-phantauth');

describe('passport-phantauth', function() {
  describe('module', function() {
    it('should report a version', function() {
      phantauth.version.should.have.type('string');
    });
  });
});

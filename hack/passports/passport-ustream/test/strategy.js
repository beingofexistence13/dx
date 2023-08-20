'use strict';

var assert = require('chai').assert;
var Strategy = require('../lib/strategy.js');

describe('UstreamStrategy', function() {
  var strategy = new Strategy({
    clientID: 'ABC123',
    clientSecret: 'secret'
  }, function() {
    // place holder
  });

  it('should be named ustream', function(done) {
    assert.equal(strategy.name, 'ustream');
    return done();
  });

  it('should request use of auth header for GET requests', function(done) {
    assert.isTrue(strategy._oauth2._useAuthorizationHeaderForGET);
    return done();
  });
});

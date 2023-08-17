/* global describe, it, expect */
/* jshint expr: true */

var ThinkfulStrategy = require('../lib/strategy');


describe('Strategy', function() {

  var strategy = new ThinkfulStrategy({
      clientID: 'ABC123',
      clientSecret: 'secret'
    },
    function() {});

  it('should be named thinkful', function() {
    expect(strategy.name).to.equal('thinkful');
  });
});
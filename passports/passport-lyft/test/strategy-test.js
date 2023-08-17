var expect = require('chai').expect;
var util = require('util');
var lyftStrategy = require('../lib/strategy');

describe('Strategy', function() {
  
  describe('constructed', function() { 
    var strategy = new lyftStrategy({
        clientID: 'ABC123',
        clientSecret: 'secret'
      },
      function() {});
      
    it('should be named lyft', function() {
      expect(strategy.name).to.equal('lyft');
    });
  })

  describe('constructed with undefined options', function() {
    it('should throw', function() {
      expect(function() {
        var strategy = new lyftStrategy(undefined, function(){});
      }).to.throw(Error);
    });
  })
  
});
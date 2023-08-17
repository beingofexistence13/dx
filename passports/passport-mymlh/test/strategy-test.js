var $require      = require('proxyquire');
var assert        = require('assert');
var chai          = require('chai');
var util          = require('util');
var fs            = require('fs');
var MyMLHStrategy = require('../lib/strategy.js');
var config        = require('../example/config.js');

var expect        = chai.expect;

describe('Strategy', function() {

  describe('constructed', function() {
    var strategy = new MyMLHStrategy({
      clientID: config.MYMLH_CLIENT_ID,
      clientSecret: config.MYMLH_SECRET
    }, function() {});

    it('should be named mymlh', function() {
      expect(strategy.name).to.equal('mymlh');
    });

    it('should have default user agent', function() {
      expect(strategy._oauth2._customHeaders['User-Agent']).to.equal('passport-mymlh');
    });
  });

  describe('constructed with undefined options', function() {
    it('should throw', function() {
      expect(function() {
        var strategy = new MyMLHStrategy(undefined, function() {});
      }).to.throw(Error);
    });
  });

  describe('constructed with customHeaders option, including User-Agent field', function() {
    var strategy = new MyMLHStrategy({
      clientID: config.MYMLH_CLIENT_ID,
      clientSecret: config.MYMLH_SECRET,
      customHeaders: { 'User-Agent': 'example.test' }
    }, function() {});

    it('should set user agent as custom header in underlying OAuth 2.0 implementation', function() {
      expect(strategy._oauth2._customHeaders['User-Agent']).to.equal('example.test');
    });
  });

});

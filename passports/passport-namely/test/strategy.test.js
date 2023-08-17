/*global describe, it, beforeEach, before*/
var should = require('should');
var NamelyStrategy = require('../lib/strategy');

describe('Namely Strategy', function() {

  var strategy;

  beforeEach(function() {
    strategy = new NamelyStrategy({
      clientID: 'ABC123',
      clientSecret: 'secret',
      site: 'test'
    }, function() {});
  });

  it('should be named namely', function() {
    should.exist(strategy.name);
    strategy.name.should.be.eql('namely');
  });

  it('should have default user agent', function() {
    should.exist(strategy._oauth2);
    should.exist(strategy._oauth2._customHeaders['User-Agent']);
    strategy._oauth2._customHeaders['User-Agent'].should.be.eql('passport-namely');
  });

  describe('with user agent option', function() {

    beforeEach(function() {
      strategy = new NamelyStrategy({
        clientID: 'ABC123',
        clientSecret: 'secret',
        site: 'test',
        userAgent: 'example'
      }, function() {});
    });

    it('should have custom user agent', function() {
      should.exist(strategy._oauth2);
      should.exist(strategy._oauth2._customHeaders['User-Agent']);
      strategy._oauth2._customHeaders['User-Agent'].should.be.eql('example');
    });

  });
});

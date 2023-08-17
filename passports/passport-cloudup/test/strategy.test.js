var chai = require('chai');
global.expect = chai.expect;
var CloudupStrategy = require('../lib/strategy');

describe('Strategy', function() {

  var strategy = new CloudupStrategy({
      clientID: 'ABC123',
      clientSecret: 'secret'
    },
    function() {});

  it('should be named cloudup', function() {
    expect(strategy.name).to.equal('cloudup');
  });

  it('should have default user agent', function() {
    expect(strategy._oauth2._customHeaders['User-Agent']).to.equal('passport-cloudup');
  });


  describe('constructed with user agent option', function() {

    var strategy = new CloudupStrategy({
        clientID: 'ABC123',
        clientSecret: 'secret',
        userAgent: 'example.com'
      },
      function() {});

    it('should have default user agent', function() {
      expect(strategy._oauth2._customHeaders['User-Agent']).to.equal('example.com');
    });
  });

  describe('constructed with custom headers including user agent', function() {

    var strategy = new CloudupStrategy({
        clientID: 'ABC123',
        clientSecret: 'secret',
        customHeaders: { 'User-Agent': 'example.net' }
      },
      function() {});

    it('should have default user agent', function() {
      expect(strategy._oauth2._customHeaders['User-Agent']).to.equal('example.net');
    });
  });

  describe('constructed with both custom headers including user agent and user agent option', function() {

    var strategy = new CloudupStrategy({
        clientID: 'ABC123',
        clientSecret: 'secret',
        customHeaders: { 'User-Agent': 'example.org' },
        userAgent: 'example.net'
      },
      function() {});

    it('should have default user agent', function() {
      expect(strategy._oauth2._customHeaders['User-Agent']).to.equal('example.org');
    });
  });

});

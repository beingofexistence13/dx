/* global describe, it, expect */
/* jshint expr: true */

var OSChinaStrategy = require('../lib/strategy');

describe('Strategy', function() {
    
  var strategy = new OSChinaStrategy({
      clientID: 'ABC123',
      clientSecret: 'secret'
    },
    function() {});
    
  it('should be named oschina', function() {
    expect(strategy.name).to.equal('oschina');
  });
  
  it('should have default user agent', function() {
    expect(strategy._oauth2._customHeaders['User-Agent']).to.equal('passport-oschina');
  });
  
  describe('constructed with user agent option', function() {
    
    var strategy = new OSChinaStrategy({
        clientID: 'ABC123',
        clientSecret: 'secret',
        userAgent: 'ilivebox.net'
      },
      function() {});
  
    it('should have default user agent', function() {
      expect(strategy._oauth2._customHeaders['User-Agent']).to.equal('ilivebox.net');
    });
  });
  
  describe('constructed with custom headers including user agent', function() {
    
    var strategy = new OSChinaStrategy({
        clientID: 'ABC123',
        clientSecret: 'secret',
        customHeaders: { 'User-Agent': 'ilivebox.net' }
      },
      function() {});
  
    it('should have default user agent', function() {
      expect(strategy._oauth2._customHeaders['User-Agent']).to.equal('ilivebox.net');
    });
  });
  
  describe('constructed with both custom headers including user agent and user agent option', function() {
    
    var strategy = new OSChinaStrategy({
        clientID: 'ABC123',
        clientSecret: 'secret',
        customHeaders: { 'User-Agent': 'ilivebox.net' },
        userAgent: 'example.net'
      },
      function() {});
  
    it('should have default user agent', function() {
      expect(strategy._oauth2._customHeaders['User-Agent']).to.equal('ilivebox.net');
    });
  });
  
});
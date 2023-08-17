/* global describe, it, expect */
/* jshint expr: true */

var NuweStrategy = require('../lib/strategy');


describe('Strategy', function() {
    
  var strategy = new NuweStrategy({
      clientID: 'ABC123',
      clientSecret: 'secret'
    },
    function() {});
    
  it('should be named nuwe', function() {
    expect(strategy.name).to.equal('nuwe');
  });
  
  it('should add web_server to authorization params', function() {
    var params = strategy.authorizationParams();
    expect(params.type).to.equal('web_server');
  });
  
  it('should add web_server to token params', function() {
    var params = strategy.tokenParams();
    expect(params.type).to.equal('web_server');
  });
  
});

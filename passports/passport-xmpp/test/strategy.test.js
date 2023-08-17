/* global describe, it, expect */

var Strategy = require('../lib/strategy');


describe('Strategy', function() {
    
  var strategy = new Strategy(function(){});
    
  it('should be named xmpp', function() {
    expect(strategy.name).to.equal('xmpp');
  });
  
});

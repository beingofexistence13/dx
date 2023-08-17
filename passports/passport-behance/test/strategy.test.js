/* global describe, it, expect */
/* jshint expr: true */

var BehanceStrategy = require('../lib/strategy');


describe('Strategy', function() {
    
  var strategy = new BehanceStrategy({
      clientID: 'ABC123',
      clientSecret: 'secret'
    },
    function() {});
    
  it('should be named behance', function() {
    expect(strategy.name).to.equal('behance');
  });
  
});

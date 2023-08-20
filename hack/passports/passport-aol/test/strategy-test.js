var vows = require('vows');
var assert = require('assert');
var util = require('util');
var AOLStrategy = require('passport-aol/strategy');


vows.describe('AOLStrategy').addBatch({
  
  'strategy': {
    topic: function() {
      return new AOLStrategy({ returnURL: 'https://www.example.com/auth/aol/return' },
        function() {}
      );
    },
    
    'should be named aol': function (strategy) {
      assert.equal(strategy.name, 'aol');
    },
    'should have correct provider URL': function (strategy) {
      assert.equal(strategy._providerURL, 'https://api.screenname.aol.com/auth/openid/xrds');
    },
  },
  
}).export(module);

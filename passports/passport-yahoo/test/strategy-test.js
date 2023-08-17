var vows = require('vows');
var assert = require('assert');
var util = require('util');
var YahooStrategy = require('passport-yahoo/strategy');


vows.describe('YahooStrategy').addBatch({
  
  'strategy': {
    topic: function() {
      return new YahooStrategy({ returnURL: 'https://www.example.com/auth/yahoo/return' },
        function() {}
      );
    },
    
    'should be named yahoo': function (strategy) {
      assert.equal(strategy.name, 'yahoo');
    },
    'should have correct provider URL': function (strategy) {
      assert.equal(strategy._providerURL, 'http://open.login.yahooapis.com/openid20/www.yahoo.com/xrds');
    },
  },
  
}).export(module);

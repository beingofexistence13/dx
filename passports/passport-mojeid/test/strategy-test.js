var vows = require('vows');
var assert = require('assert');
var util = require('util');
var MojeIDStrategy = require('passport-mojeid/strategy');


vows.describe('MojeIDStrategy').addBatch({
  
  'strategy': {
    topic: function() {
      return new MojeIDStrategy({ returnURL: 'https://www.example.com/auth/mojeid/return' },
        function() {}
      );
    },
    
    'should be named mojeid': function (strategy) {
      assert.equal(strategy.name, 'mojeid');
    },
    'should have correct provider URL': function (strategy) {
      assert.equal(strategy._providerURL, 'https://mojeid.cz/endpoint/');
    },
  },
  
}).export(module);

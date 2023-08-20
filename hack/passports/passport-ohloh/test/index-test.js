var vows = require('vows');
var assert = require('assert');
var util = require('util');
var ohloh = require('passport-ohloh');


vows.describe('passport-ohloh').addBatch({
  
  'module': {
    'should report a version': function (x) {
      assert.isString(ohloh.version);
    },
  },
  
}).export(module);

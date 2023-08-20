var vows = require('vows');
var assert = require('assert');
var util = require('util');
var assembla = require('passport-assembla');


vows.describe('passport-assembla').addBatch({
  
  'module': {
    'should report a version': function (x) {
      assert.isString(assembla.version);
    }
  }
  
}).export(module);

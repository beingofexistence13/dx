var vows = require('vows');
var assert = require('assert');
var util = require('util');
var exact = require('passport-exact');


vows.describe('passport-exact').addBatch({
  
  'module': {
    'should report a version': function (x) {
      assert.isString(exact.version);
    },
  },
  
}).export(module);
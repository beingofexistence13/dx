var vows = require('vows');
var assert = require('assert');
var util = require('util');
var aol = require('passport-aol');


vows.describe('passport-aol').addBatch({
  
  'module': {
    'should report a version': function (x) {
      assert.isString(aol.version);
    },
  },
  
}).export(module);

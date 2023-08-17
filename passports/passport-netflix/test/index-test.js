var vows = require('vows');
var assert = require('assert');
var util = require('util');
var netflix = require('passport-netflix');


vows.describe('passport-netflix').addBatch({
  
  'module': {
    'should report a version': function (x) {
      assert.isString(netflix.version);
    },
  },
  
}).export(module);

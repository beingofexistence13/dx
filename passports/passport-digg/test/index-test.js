var vows = require('vows');
var assert = require('assert');
var util = require('util');
var digg = require('passport-digg');


vows.describe('passport-digg').addBatch({
  
  'module': {
    'should report a version': function (x) {
      assert.isString(digg.version);
    },
  },
  
}).export(module);

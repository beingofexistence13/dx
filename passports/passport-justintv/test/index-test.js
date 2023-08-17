var vows = require('vows');
var assert = require('assert');
var util = require('util');
var justintv = require('passport-justintv');


vows.describe('passport-justintv').addBatch({
  
  'module': {
    'should report a version': function (x) {
      assert.isString(justintv.version);
    },
  },
  
}).export(module);

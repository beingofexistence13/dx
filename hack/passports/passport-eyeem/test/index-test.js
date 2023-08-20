var vows = require('vows');
var assert = require('assert');
var util = require('util');
var eyeem = require('passport-eyeem');


vows.describe('passport-eyeem').addBatch({
  
  'module': {
    'should report a version': function (x) {
      assert.isString(eyeem.version);
    },
  },
  
}).export(module);

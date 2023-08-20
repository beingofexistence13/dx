var vows = require('vows');
var assert = require('assert');
var util = require('util');
var readability = require('passport-readability');


vows.describe('passport-readability').addBatch({
  
  'module': {
    'should report a version': function (x) {
      assert.isString(readability.version);
    },
  },
  
}).export(module);

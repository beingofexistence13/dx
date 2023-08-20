var vows = require('vows');
var assert = require('assert');
var util = require('util');
var smugmug = require('passport-smugmug');


vows.describe('passport-smugmug').addBatch({
  
  'module': {
    'should report a version': function (x) {
      assert.isString(smugmug.version);
    },
  },
  
}).export(module);

var vows = require('vows');
var assert = require('assert');
var util = require('util');
var tripit = require('passport-tripit');


vows.describe('passport-tripit').addBatch({
  
  'module': {
    'should report a version': function (x) {
      assert.isString(tripit.version);
    },
  },
  
}).export(module);

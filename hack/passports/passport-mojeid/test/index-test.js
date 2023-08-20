var vows = require('vows');
var assert = require('assert');
var util = require('util');
var mojeid = require('passport-mojeid');


vows.describe('passport-mojeid').addBatch({
  
  'module': {
    'should report a version': function (x) {
      assert.isString(mojeid.version);
    },
  },
  
}).export(module);

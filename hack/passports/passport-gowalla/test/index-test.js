var vows = require('vows');
var assert = require('assert');
var util = require('util');
var gowalla = require('passport-gowalla');


vows.describe('passport-gowalla').addBatch({
  
  'module': {
    'should report a version': function (x) {
      assert.isString(gowalla.version);
    },
  },
  
}).export(module);

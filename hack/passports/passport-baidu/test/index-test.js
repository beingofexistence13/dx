var vows = require('vows');
var assert = require('assert');
var util = require('util');
var baidu = require('passport-baidu');


vows.describe('passport-baidu').addBatch({
  
  'module': {
    'should report a version': function (x) {
      assert.isString(baidu.version);
    },
  },
  
}).export(module);

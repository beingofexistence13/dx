var vows = require('vows');
var assert = require('assert');
var util = require('util');
var nexon = require('passport-nexon');

vows.describe('passport-nexon').addBatch({
  
  'module': {
    'should report a version': function (x) {
      assert.isString(nexon.version);
    },
    'should export OAuth 2.0 strategy': function (x) {
      assert.isFunction(nexon.OAuth2Strategy);
    },
  },
  
}).export(module);
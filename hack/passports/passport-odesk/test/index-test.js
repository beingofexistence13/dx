var vows = require('vows');
var assert = require('assert');
var util = require('util');
var twitter = require('passport-odesk');

vows.describe('passport-odesk').addBatch({
  
  'module': {
    'should report a version': function (x) {
      assert.isString(twitter.version);
    }
  }
  
}).export(module);

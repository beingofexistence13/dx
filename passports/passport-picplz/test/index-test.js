var vows = require('vows');
var assert = require('assert');
var util = require('util');
var picplz = require('passport-picplz');


vows.describe('passport-picplz').addBatch({
  
  'module': {
    'should report a version': function (x) {
      assert.isString(picplz.version);
    },
  },
  
}).export(module);

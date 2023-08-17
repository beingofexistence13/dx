var vows = require('vows');
var assert = require('assert');
var util = require('util');
var moves = require('../lib');


vows.describe('passport-moves').addBatch({
  
  'module': {
    'should report a version': function (x) {
      assert.isString(moves.version);
    },
  },
  
}).export(module);

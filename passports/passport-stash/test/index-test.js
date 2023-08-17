var vows = require('vows');
var assert = require('assert');
var util = require('util');
var stash = require('passport-stash');


vows.describe('passport-stash').addBatch({

  'module': {
    'should report a version': function (x) {
      assert.isString(stash.version);
    }
  }

}).export(module);

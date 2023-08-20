var vows = require('vows');
var assert = require('assert');
var util = require('util');
var allplayers = require('passport-dropbox');


vows.describe('passport-allplayers').addBatch({
  
  'module': {
    'should report a version': function (x) {
      assert.isString(allplayers.version);
    },
  },
  
}).export(module);

var vows = require('vows');
var assert = require('assert');
var util = require('util');
var eHealth = require('passport-eHealth');


vows.describe('passport-eHealth').addBatch({
  
  'module': {
    'should report a version': function (x) {
      assert.isString(eHealth.version);
    },
  },
  
}).export(module);

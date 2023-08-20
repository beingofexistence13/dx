var vows = require('vows');
var assert = require('assert');
var util = require('util');
var vimeo = require('passport-vimeo');


vows.describe('passport-vimeo').addBatch({
  
  'module': {
    'should report a version': function (x) {
      assert.isString(vimeo.version);
    },
  },
  
}).export(module);
